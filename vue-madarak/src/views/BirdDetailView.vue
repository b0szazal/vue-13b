<template>
  <div class="container">
   <div  class="backAndForward" @click="backByOneID()">
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000" ><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
   </div>
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
    <div class="backAndForward" @click="forwardByOneID()">
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000" ><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
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
let madar=birdStore.madarak.find(m=>m.id==route.params.id);

const szavazokDetail = (id) =>{
    birdStore.szavazok(id);
    router.push('/');
}

const backByOneID = () =>{
   if(madar.id!=1){
      router.push('/birds/'+(Number(madar.id)-1));
      madar=birdStore.madarak.find(m=>m.id==madar.id-1);
   }
}

const forwardByOneID = () =>{
   if(birdStore.madarak.length>madar.id){
      router.push('/birds/'+(Number(madar.id)+1));
      madar=birdStore.madarak.find(m=>m.id==madar.id+1);
   }
}


document.addEventListener("keydown", (e)=>{
    if(e.key=="ArrowLeft"){
      console.log(e.key)
        backByOneID();
    }
    if(e.key=="ArrowRight"){
      console.log(e.key)
        forwardByOneID();
    }
})
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
 .backAndForward{
   height: 100%;
 }
</style>