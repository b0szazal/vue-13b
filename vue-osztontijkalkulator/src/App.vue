<template>
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
          <p> {{ osszeg }} Ft / hó</p>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button @click="nullaz" type="button" class="btn btn-success" data-bs-dismiss="modal">Új kalkuláció</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezárás</button>
        </div>

      </div>
    </div>
  </div>
  <div class="mt-5 container">
      <Navigation/>
      <h1 class="text-center">Ösztöndíj kalkulátor</h1>
      <div>
        <label for="evismetlo">Évismétlő?</label>   
        <input type="checkbox" v-model="evism" id="evismetlo" class="form-check-label">
       </div>
        <table class="table mt-5" v-show="!evism">
          <tbody>
            
              <tr>
                <td>
                  <label for="intezmenyT">Intézmény típusa: </label>
                </td>
                <td>    
                  <label for="intezmenyT">Technikum</label> <input type="radio" v-model="intezmenyTipusa" id="intezmenyT" class="form-check-label" value="intezmenyT">
                  <label for="intezmenySz">Szakképző</label> <input type="radio" v-model="intezmenyTipusa" id="intezmenySz" class="form-check-label" value="intezmenySz">
                </td>
              </tr>
              <tr>
                <td>
                  <label for="munkarend">Munkarend: </label>
                </td>
                <td>    
                  <label for="munkarend">Nappali</label> <input type="radio" v-model="mrend" id="munkarend" class="form-check-label" value="nappali">
                  <label for="munkarendF">Felnőtt</label> <input type="radio" v-model="mrend" id="munkarendF" class="form-check-label" value="felnőtt">
                </td>
              </tr>
              <tr>
                <td>
                  <label for="evfolyam">Évfolyam: </label>
                </td>
                <td>
                  <select id="evfolyam" v-model="evf">
                    <option v-for="ev, index in evfolyamok" :key="index">{{ ev }}</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="atlag">Átlag: </label>
                </td>
                <td>
                  <input type="text" id="átlag" v-model="tanulmanyiAtlag" placeholder="1-5 közt">
                </td>
              </tr>
          </tbody>
        </table>
        <button @click="kalkulal" class="form-control btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-osszeg">Számítás</button>
      </div>
</template>
<script setup>
  import { ref } from 'vue';
  import Navigation from './components/Navigation.vue';
  
  const evism = ref(false);
  const evfolyamok = ref(['9', '10', '11', '12', '13', '1/13', '2/14']);
  const evf=ref();
  const intezmenyTipusa = ref("intezmenyT");
  const mrend = ref('nappali');
  const tanulmanyiAtlag = ref("5");
  const osszeg= ref();

  const kalkulal=()=>{
    tanulmanyiAtlag.value = tanulmanyiAtlag.value.replace(",", ".");
    if(evism.value){
      osszeg.value=0;
    }
    else if(intezmenyTipusa.value==="intezmenyT"){      
      if(evf.value === "9" && evf.value ==="10"){
        osszeg.value=8000;
      }
      else{
        osszeg.value=atlagSzerintiSzamolas();
      } 
    }
    else{
      osszeg.value=0;
    }

  }

  const atlagSzerintiSzamolas=()=>{
    switch (true) {
        case tanulmanyiAtlag.value<3:
          return 8000;
        case tanulmanyiAtlag.value<4:
          return 25000;
        case tanulmanyiAtlag.value<4.5:
          return 42000;
        default:
          return 59000;
      }
  }

  const nullaz=()=>{
    evism.value = false;
    /*evfolyamok.value = "9";*/
    intezmenyTipusa.value = "intezmenyT";
    mrend.value = 'nappali';
    tanulmanyiAtlag.value = 5;
  }

</script>
<style scoped>
  .container 
  {
    max-width: fit-content;
  }
  table{
    margin: auto;
  }
  td{
    margin: auto;
  }
  input[type="radio"]{
    margin-right: 10px;
  }
  table>div>tr>td{
    padding: 15px;
  }
</style>
