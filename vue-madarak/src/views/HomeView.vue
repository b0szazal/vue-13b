<template>
 <div class="container">
    <div class="madar" v-for="madar in madarak" :key="madar.id">
        <h3>{{ madar.nev }}</h3>
        <img :src="madar.kep" :alt="madar.nev" class="img"> <br>
        <button @click="szavazok(madar.id)">Szavazok</button>
        <button>Részletek</button>
    </div>
 </div>
</template>
<script setup>
import { ref } from 'vue';
const madarak = ref([
    {
        id: 1,
    nev: 'Veréb',
    fesztav : 20,
    ragadozo : false,
    ropkepes : true,
    kep: 'https://madarpark.hu/wp-content/uploads/2014/03/Passer_domesticus_male_15-1.jpg'
    },
    {
        id: 2,
    nev: 'Pulyka',
    fesztav : 120,
    ragadozo : false,
    ropkepes : false,
    kep : 'https://www.e-kepeslap.com/kepek/kepeslapok/hatterkepek/allatok-baromfi/kozepes/2524-hazi-pulyka.jpg',
    },
    {
        id: 3,
    nev: 'Sas',
    fesztav : 220,
    ragadozo : true,
    ropkepes : true,
    kep : 'https://www.europamadarai.hu/wp-content/uploads/2022/01/fekete-sas5.jpg'
    },
    {
        id: 4,
    nev: 'Fecske',
    fesztav : 30,
    ragadozo : false,
    ropkepes : true,
    kep : 'https://nlc.p3k.hu/uploads/2020/04/fecsk-768x432.jpg'
    },
    {
        id: 5,
    nev: 'Flamingó',
    fesztav : 140,
    ragadozo : false,
    ropkepes : true,
    kep : 'https://ng.24.hu/uploads/2023/01/Phoenicopterus-chilensis.jpeg'
    },
    {
        id: 6,
    nev: 'Pelikán',
    fesztav : 250,
    ragadozo : true,
    ropkepes : true,
    kep : 'https://madaraink.hu/wp-content/uploads/2023/06/Pelikan2-735x400.jpeg'
    },
    {
        id: 7,
    nev: 'Páva',
    fesztav : 150,
    ragadozo : false,
    ropkepes : false,
    kep : 'https://nlc.p3k.hu/uploads/2020/12/pava-768x432.jpg'
    },

    ])

const szavazok = id => {
    const madar = madarak.value.find(m => m.id === id);
    madar.szavazatok =madar.szavazatok+1 || 1;
    console.log(madar);
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