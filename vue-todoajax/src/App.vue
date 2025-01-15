<template>
  <header>
    <div class="wrapper">
      sigma
    </div>
  </header>

  <main>
    <div v-for="task in tasks" class="task">
      <h2>{{ task.title }}</h2>
      <p>Állapot: {{ task.completed ? "kész" : "nincs kész" }}</p>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const tasks = ref(['Laoding...']);

onMounted(() => {
  axios.get('http://localhost:3000/todos')
    .then(response => {
      tasks.value = response.data;
    });
});
</script>
<style scoped>
.wrapper {
  margin: 0 auto;
  padding: 0 20px;
  padding: 20px;
  background-color: black;
  color: white;
  text-align: center;
}
main{
    font-family: Arial, sans-serif;
    color: #333;
    margin: 0 auto;
    display: flex;
    max-width: 80%;
    flex-wrap: wrap;
    justify-content: space-around;
 }
  .task{
    padding: 10px;
    margin: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    min-width: 300px;
  }
  h2{
    font-size: 1.5rem;
    text-align: center;
  }
  p{
    font-size: 1rem;
  }
  .actions{
    display: flex;
    justify-content: space-around;
  }
  button{
    padding: 15px;
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
  button:active{
    background-color: #343a40;
    color: white;
  }
  button:focus{
    outline: none;
  }
</style>
