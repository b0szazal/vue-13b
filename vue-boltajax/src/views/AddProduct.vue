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
  import { useToast } from "vue-toastification";
  
  const router = useRouter();
  const productStore = useProductStore();
  const toast = useToast();
  
    const addProduct = () => {
        const prName = document.getElementById('prName').value;
        const prPrice = document.getElementById('prPrice').value;
        const prDesc = document.getElementById('prDesc').value;
        const prUnit = document.getElementById('prUnit').value;
        const prStore = document.getElementById('prStore').value;
        
        if(!prName || !prPrice || !prDesc || !prUnit || !prStore){
            toast.error('Minden mezőt ki kell tölteni!');
            return;
        }
        toast.success('Termék hozzáadva!');
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
        border-radius: 15px;
    }
    input{
        padding: 5px;
        border-radius: 15px;
    }
    .container{
        margin: auto;
        max-width: 40%;
        border-radius: 15px;
        border: gray 1px solid;
        padding: 2em;
        background-image: linear-gradient(to top, gray, rgb(200, 200, 200));
        background-color: rgb(158, 158, 158);
        position: relative;
    }
    @property --angle{
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes spin{
        from{
            --angle: 0deg;
        }
        to{
            --angle: 360deg;
        }
    }

    .container::after, .container::before{
        content: '';
        background-image: conic-gradient(from var(--angle),  red, green, blue, red);
        position: absolute;
        width: 110%;
        height: 110%;
        z-index: -1;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        border-radius: 15px;
        animation: 3s spin linear infinite;
    }
  </style>