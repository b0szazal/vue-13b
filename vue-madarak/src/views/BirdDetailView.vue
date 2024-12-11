<template>
  <div class="container">
    <div class="madar">
        <h3>{{ madar.nev }}</h3>
        <img :src="madar.kep" :alt="madar.nev" class="img"> <br>
        <p>Fesztáv:  {{ madar.fesztav }} cm
            <br>
            Ragadozó : {{ madar.ragadozo? 'Igen' : 'Nem' }}
            <br>
            Röpképes : {{ madar.ropkepes? 'Igen' : 'Nem' }}
            <br>
        </p>
        <button @click="szavazokDetail(madar.id)">Szavazok</button>
    </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBirdStore } from '@/stores/bird';
import { useRoute, useRouter } from 'vue-router';

const birdStore = useBirdStore();
const route= useRoute()
const router= useRouter()
const madar=birdStore.madarak.find(m=>m.id==route.params.id);

const szavazokDetail = (id) =>{
    birdStore.szavazok(id);
    router.push('/about');  // Választók listájára navigálunk
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
    font-size: larger;
 }
 .madar, .img{
    width: 350px;
    text-align: center;
 }
 button{
    margin: 10px;
    padding: 10px;
    background-color: #343a40;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: larger;
    transition: background-color 0.3s ease-in-out;
 }
 button:hover{
    background-color: #212529;
    color: white;
 }
</style>