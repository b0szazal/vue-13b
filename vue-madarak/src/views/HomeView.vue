<template>
 <div class="container">
    <div class="madar" v-for="madar in birdStore.madarak" :key="madar.id">
        <h3>{{ madar.nev }}</h3>
        <img :src="madar.kep" :alt="madar.nev" class="img"> <br>
        <button @click="birdStore.szavazok(madar.id)">Szavazok</button>
        <button @click="go(madar.id)">Részletek</button>
    </div>
 </div>
</template>
<script setup>
import { markRaw, ref } from 'vue';
import { useBirdStore } from '@/stores/bird';
import { useRoute, useRouter } from 'vue-router';

const birdStore = useBirdStore();
const router = useRouter()
const go= (id)=>{
    router.push("/birds/"+id)
}
</script>

<style scoped>
 .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #f8f9fa;
    max-width: 75%;
    margin: auto;
 }
 .madar, .img{
    width: 250px;
    text-align: center;
 }
 button{
    margin: 10px;
    padding: 10px;
    background-color: #343a40;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
 }
 button:hover{
    background-color: #212529;
    color: white;
 }
</style>