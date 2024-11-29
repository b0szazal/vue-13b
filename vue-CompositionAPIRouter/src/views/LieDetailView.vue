<template>
    <div class="lies">
        <h1>Welcome to lies/{{ $route.params.id }}  page</h1>
        <p>{{ lieTexts[$route.params.id-1] }}</p>
        <p @click="handleBack" class="back">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        </p>
    </div>
    
  </template>
  
  <style scoped>
  .back{
    cursor: pointer;
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    max-width: fit-content;
  }
  </style>
  <script setup>
   import { useRoute, useRouter } from 'vue-router';
  
   const route = useRoute();
   const router = useRouter();
   const lieTexts=[
    "A Föld fánk alakú",
    "2-nél több gender van",
    "1 + 1 = 3"
   ]

   const handleBack = () => {
     router.push("/lies")
   }
  </script>
  