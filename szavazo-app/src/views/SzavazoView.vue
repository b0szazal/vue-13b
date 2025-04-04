<script setup>
import { useSzavazoStore } from '@/stores/szavazatok';
import {ref, onMounted} from 'vue'
const store = useSzavazoStore()
const temaId = ref(null)

onMounted(() =>{
 store.loadTemak() 
})
</script>

<template>
  <h1>Itt szavazhatsz!</h1>
  <p> Téma választása: 
  <select v-model="temaId" @change="store.loadOpciok(temaId)">
    <option v-for="t in store.temak" :value="t.id">{{ t.tema }}</option>
  </select>
</p>
<div v-if="temaId">
  <h3>Szavazati lehetőségek:</h3>
</div>
</template>
