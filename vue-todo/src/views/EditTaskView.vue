<template>
  <main>
    <div>
      <table >
        <tbody>
          <tr>
            <td>
              <label for="name">Feladat neve: </label>
            </td>
            <td>
              <input type="text" id="name" v-model="tasksStore.taskToEdit.name">
            </td>
          </tr>
          <tr>
            <td>
              <label for="desc">Leírás: </label>
            </td>
            <td>
              <textarea id="desc" name="desc" v-model="tasksStore.taskToEdit.description"></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label for="deadl">Határidő: </label>
            </td>
            <td>
              <input type="date" name="deadl" id="deadl" v-model="tasksStore.taskToEdit.deadline">
            </td>
          </tr>
        </tbody>
      </table>
      <div class="send">
        <button @click="save()">Mentés</button>
      </div>
  </div>
  </main>
</template>
  
<script setup>
import { useTasksStore } from '@/stores/tasksStore';
import { useRouter } from 'vue-router'
  const tasksStore=useTasksStore()
  const Router=useRouter()

const save= ()=>{
  tasksStore.taskToEdit.name=tasksStore.taskToEdit.name || 'Nincs név'
  tasksStore.taskToEdit.description=tasksStore.taskToEdit.description || 'Nincs leírás'
  tasksStore.taskToEdit.deadline=tasksStore.taskToEdit.deadline || 'Nincs határidő'
  Router.push('/tasks')
}
</script>
  
  <style scoped>
    main{
      font-family: Arial, sans-serif;
      color: #333;
      margin: 0 auto;
      max-width: fit-content;
    }
    input, textarea{
      padding: 10px;
      font-size: large;
    }
    textarea{
      width: 250px;
      height: 150px;
    }
    td{
      padding: 25px;
    }
    .send{
      display: flex;
      justify-content: center;
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