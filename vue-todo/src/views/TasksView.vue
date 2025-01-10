<template>
  <main>
    <div v-for="task in tasksStore.tasks" class="task">
      <h2>{{ task.name }}</h2>
      <div class="desc">{{ task.description }}</div>
      <p>Állapot: {{ task.completed ? "kész" : "nincs kész" }}</p>
      <p>határidő:  {{ task.deadline }} </p>
      <div class="actions">
        <button @click="tasksStore.unComplete(task.id)" v-show="task.completed">Teljesítés visszavonása</button>
        <button @click="tasksStore.Complete(task.id)">{{ !task.completed ? "Teljesítve" : "Törlés" }} </button>
        <button @click="GoToEditTask(task.id)" v-show="!task.completed"> Szerkesztés</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasksStore';
import {useRouter} from 'vue-router'

const Router= useRouter()
const tasksStore = useTasksStore();

const GoToEditTask = (id) => {
  tasksStore.findTaskToEdit(id);
  Router.push('/edittask');
}
</script>

<style scoped>
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
    max-width:25%;
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
  .desc{
    word-wrap: break-word;
  }
</style>