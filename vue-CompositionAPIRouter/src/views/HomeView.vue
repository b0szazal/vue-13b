<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()
const handleBack=()=>{
  router.push("/lies")
}
</script>

<template>
  <main>
    <p @click="handleBack" class="back">
            Just Go To Lies
    </p>

  </main>
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