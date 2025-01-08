<template>
  <div class="container col-sm-12 col-md-6">
    <RouterLink to="/tasks" class="nav-link">Feladatok</RouterLink>
    <RouterLink to="/newtask" class="nav-link">Új feladat</RouterLink>
    <RouterLink to="/edittask" class="nav-link">Feladat szerkesztése</RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
  RouterView{
    font-family: Arial, sans-serif;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 25px;
    max-width: fit-content;
    padding: 5px;
    margin: auto;
  }
  .nav-link{
    margin: 10px;
    padding: 10px;
    background-color: #343a40;
    color: white;
    text-decoration: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }
  .nav-link:hover{
    background-color: #212529;
    color: white;
  }
  
</style>


