<template>
  <div class="mt-5 container">
      <Navigation/>
      <h1 class="text-center">Ösztöndíj kalkulátor</h1>
      <div>
        <table class="table mt-5">
          <tbody>
            <tr>
              <td>
                <label for="evismetlo">Évismétlő?</label>
              </td>
              <td>    
                <input type="checkbox" v-model="evism" id="evismetlo" class="form-check-label">
              </td>
            </tr>
            <tr>
              <td>
                <label for="hianyszakma">Hiányszamka?</label>
              </td>
              <td>    
                <input type="checkbox" v-model="hianySz" id="hianyszakma" class="form-check-label">
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
                  <option v-for="ev in evfolyamok">{{ ev }}</option>
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
      </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import Navigation from './components/Navigation.vue';
  
  const evism = ref(false);
  const evfolyamok = ref(['9', '10', '11', '12', '13', '1/13', '2/14']);
  const hianySz = ref(false);
  const mrend = ref('felnőtt');
  const tanulmanyiAtlag = ref(5);


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
</style>
