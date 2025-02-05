<template>
    <div class="container mt-5">
      <table>
        <tbody>
        <tr>
            <td>
                <label for="prName">Termék neve</label>
            </td>
            <td>
                <input type="text" id="prName">
            </td>
        </tr>
        <tr>
            <td>
                <label for="prPrice">Ár</label>
            </td>
            <td>
                <input type="number" id="prPrice">
            </td>
        </tr>
        <tr>
            <td>
                <label for="prDesc">Leírás</label>
            </td>
            <td>
                <input type="text" id="prDesc">
            </td>
        </tr>
        <tr>
            <td>
                <label for="prUnit">Unit</label>
            </td>
            <td>
                <input type="text" id="prUnit">
            </td>
        </tr>
        <tr>
            <td>
                <label for="prStore">Raktáron</label>
            </td>
            <td>
                <input type="number" id="prStore">
            </td>
        </tr>
        </tbody>
      </table>
        <button @click="addProduct">Hozzáadás</button>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '@/stores/productStore.js';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const productStore = useProductStore();
  
    const addProduct = () => {
        const prName = document.getElementById('prName').value;
        const prPrice = document.getElementById('prPrice').value;
        const prDesc = document.getElementById('prDesc').value;
        const prUnit = document.getElementById('prUnit').value;
        const prStore = document.getElementById('prStore').value;
        
        if(!prName || !prPrice || !prDesc || !prUnit || !prStore){
            alert('Minden mezőt ki kell tölteni!');
            return;
        }
        
        productStore.addProduct({
        "name": prName,
        "price": prPrice+ " Ft",
        "desc": prDesc,
        "unit": prUnit,
        "store": prStore
        });
        router.push('/');
    }
  </script>
  
  <style scoped>
    table{
        max-width: fit-content;
        margin: auto;
    }
    td{
        padding: 5px;
    }
    button{
        max-width: fit-content;
        margin: auto;
        margin-top: 20px;
        display: block;
        padding: 15px;
    }

  </style>