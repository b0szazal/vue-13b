<template>
  <div class="container bg-info">
    <h1>Everything is wrong quiz</h1>
    <table class="table">
      <tbody >
        <tr>
          <td>
            <p>A Föld fánk alakú:</p>
          </td>
          <td>
            <label for="radiotrue">Igaz</label>
            <input type="radio" v-model="kvizradio" name="radiotrueFalse" id="radiotrue" value="true">
            <label for="radiofalse">Hamis</label>
            <input type="radio" v-model="kvizradio" name="radiotrueFalse" id="radiofalse" value="false">
          </td>
        </tr>
        <tr>
          <td>
            <label for="kvizgenders">Hány nem van:</label>
          </td>
          <td>
            <select name="genders" id="kvizgenders" v-model="genders">
              <option value=""></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="10">10</option>
              <option value="infinite">végtelen</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="kvizgenders">miért választottad ezt? </label>
          </td>
          <td>
            <input type="text" placeholder="1-nél több szavas válasz" v-model="oneWordAnswer">
          </td>
        </tr>
        <tr>
          <td>
            <p>1 + 1 = 3 </p>
          </td>
          <td>
            <label for="checktrue">Igaz</label>
            <input type="checkbox" name="true" id="checktrue" v-model="checkboxValues[0]">
            <label for="checkfalse">Hamis</label>
            <input type="checkbox" name="true" id="checkfalse" v-model="checkboxValues[1]"><br>
            <label for="checkmaybe">Talán</label>
            <input type="checkbox" name="true" id="checkmaybe" v-model="checkboxValues[2]">
            <label for="checkhuh">huh</label>
            <input type="checkbox" name="true" id="checkhuh" v-model="checkboxValues[3]">
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="checkAnswer" data-bs-toggle="modal" data-bs-target="#modal-result">Ellenőrizd</button>
  </div>
  <Modal :result="result" :skill-issue="skillIssue"/>
</template>

<script setup>
import {ref} from 'vue';
import Modal from './components/Modal.vue';

 const kvizradio = ref();
 const genders = ref("");
 const oneWordAnswer=ref("");
 const checkboxValues = ref([false, false, false, false]);
 const result = ref(0);
 const skillIssue = ref(false);
 const checkAnswer=()=>{
  let points=0;
   if(kvizradio.value === "true"){
     points++;
   }
   if(genders.value === "0"){
     points++;
   }

   let oWA=oneWordAnswer.value;
   if(oWA.trim().split(" ").length==1 && oWA.trim().length!=0){
     points++;
   }
   let checkboxpoints=0;
   if(checkboxValues.value[0]==true){
    checkboxpoints++;
   }
   if(checkboxValues.value[1]==true){
    checkboxpoints--;
   }
   if(checkboxValues.value[2]==true){
    checkboxpoints--;
   }
   if(checkboxValues.value[3]==true){
    checkboxpoints++;
   }

   if(checkboxpoints>0){
     points+=checkboxpoints;
   }

   result.value = `${points}`;
   skillIssue.value= points==0 ? true: false;
};
</script>

<style scoped>
.container {
  max-width: fit-content;
  margin: auto;
  padding: 100px;
  margin-top: 20px;
  border-radius: 15px;
}
h1{
  margin-bottom: 25px;
}
button{
  display: block;
  max-width: fit-content;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
}
label, input, select, p{
  margin-left: 10px;
  padding: 10px;
}
</style>
