<template>
    <main>
      <table>
        <tr>
          <td>
            <label for="name">Feladat neve: </label>
          </td>
          <td>
            <input type="text" id="name">
          </td>
        </tr>
        <tr>
          <td>
            <label for="desc">Leírás: </label>
          </td>
          <td>
            <textarea id="desc" name="desc"></textarea>
          </td>
        </tr>
        <tr>
          <td>
            <label for="deadl">Határidő: </label>
          </td>
          <td>
            <input type="datetime-local" name="deadl" id="deadl">
          </td>
        </tr>
      </table>
      <div class="send">
        <button @click="CreateTask()">Létrehozás</button>
      </div>
    </main>
  </template>
  
  <script setup>
  import { useTasksStore } from '@/stores/tasksStore';
  import { useRouter } from 'vue-router'

  const Router= useRouter()
  const tasksStore=useTasksStore()
  const CreateTask=()=>{
    const name=document.getElementById('name').value
    const desc=document.getElementById('desc').value
    const deadl=document.getElementById('deadl').value
    tasksStore.addTask(name,desc,deadl)
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