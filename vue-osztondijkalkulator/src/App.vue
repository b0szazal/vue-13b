<template>
  <div class="container col-sm-12 col-md-6">
    <Navigation />
    <h1 class="text-center">Ösztöndíj kalkulátor</h1>
    <div>
      <label for="evismetlo">Évismétlő? &nbsp; &nbsp;</label>
      <input type="checkbox" v-model="evism" id="evismetlo">
    </div>
    <div class="parameterek" v-show="!evism">
     
        <IntezmenyTipusa @tipus = "(tipus) => intezmenyTipusa = tipus" />
      
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
  <Modal :osztondij="osszeg" />
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Modal from './components/Modal.vue';
import IntezmenyTipusa from './components/IntezmenyTipusa.vue';

const evism = ref(false)
const evfolyamok = ref(['9','10','11','12','13','1/13','2/14'])
const tanulmanyiAtlag = ref("")
const evf = ref()
const mred = ref()
const intezmenyTipusa = ref()
const osszeg = ref()

const kalkulal = () =>{
  tanulmanyiAtlag.value = tanulmanyiAtlag.value.replace(',','.')
  console.log(IntezmenyTipusa)
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

const nullaz = () =>{   //Új kalkuláció indítása üres űrlap elemekkel
  evism.value = false
  intezmenyTipusa.value = ""
  mrend.value = ""
  tanulmanyiAtlag.value = ""
}

</script>

<style scoped>

</style>