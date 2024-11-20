<template>
  
  <!-- The Modal -->
<div class="modal" id="modal-osszeg">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Ösztöndíj összege</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <h2 class="text-center">{{ osszeg }} Ft / hó</h2>
        <!-- Ft / hó -->
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button @click="nullaz" type="button" class="btn btn-success" data-bs-dismiss="modal">Új kalkuláció</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezár</button>
      </div>

    </div>
  </div>
</div>

  <div class="container col-sm-12 col-md-6">
    <Navigation />
    <h1 class="text-center">Ösztöndíj kalkulátor</h1>
    <div>
      <label for="evismetlo">Évismétlő? &nbsp; &nbsp;</label>
      <input type="checkbox" v-model="evism" id="evismetlo">
    </div>
    <div class="parameterek" v-show="!evism">
     
        <div>
          <label for="intezmeny">Intézmény típusa: &nbsp; &nbsp;</label><br>
          <span>Technikum: </span><input type="radio" v-model="intezmenyTipusa" id="intezmeny" value="technikum"><br>
          <span>Szakképző iskola: </span><input type="radio" v-model="intezmenyTipusa" id="intemeny" value="szakkepzo">
        </div>
      
      <div>
        <label for="munkarend">Munkarend: &nbsp; &nbsp;</label><br>
        <span>Nappali: </span><input type="radio" v-model="mrend" id="munkarend" value="nappali"><br>
        <span>Felnőtt: </span><input type="radio" v-model="mrend" id="munkarend" value="felnőtt">
      </div>

      <div>
        <div>
          <label for="evfolyam">Évfolyam: </label>
          <select v-model="evf" id="evfolyam">
            <option v-for="ev, index in evfolyamok" :key="index">{{ ev }}</option>
          </select>
        </div>
      </div>
      <div>
        <label for="atlag">Előző év végi tanulmányi átlag:</label>
        <input type="text" v-model="tanulmanyiAtlag" id="atlag">
      </div>
    </div>
    <button @click="kalkulal" class="form-control btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-osszeg">Kalkulál</button>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'

const evism = ref(false)
const evfolyamok = ref(['9','10','11','12','13','1/13','2/14'])
const tanulmanyiAtlag = ref("")
const evf = ref()
const mred = ref()
const intezmenyTipusa = ref()
const osszeg = ref()

const kalkulal = () =>{
  tanulmanyiAtlag.value = tanulmanyiAtlag.value.replace(',','.')
  if (evism.value){
    osszeg.value = 0;
  }
  else{
    if (intezmenyTipusa.value === "technikum"){
      if (evf.value === '9' || evf.value === '10'){
        osszeg.value = 8000
      }
      else 
      {
        //átlag szerinti összeg
        osszeg.value = atlagSzerintiSzamolas()
      }
    } 
    else
    {
      if (evf.value === '9'){
        osszeg.value = 16000
      }
      else{
        //átlag szerinti összeg
        osszeg.value = atlagSzerintiSzamolas()
      }

    } 
  }
}

 const atlagSzerintiSzamolas = () => {
  switch (true){
    case (tanulmanyiAtlag.value < 3): return 8000
    case (tanulmanyiAtlag.value < 4): return 25000
    case (tanulmanyiAtlag.value < 4.5): return 42000
    default: return 59000
  }
 }

const nullaz = () =>{
  //console.log("Újra")
  evism.value = false;
}

</script>

<style scoped>

</style>