

<template>
  <div id="app">
    <div v-for="user in users" class="user">
      <h2>{{ user.id }}</h2>
      <p>Név: {{ user.name }}</p>
      <button @click="GetPosts(user.id)">Get posts</button>
    </div>
  </div>
  <div id="posts">
    <div v-for="post in posts" class="user">
      <h2>{{ post.id }}  {{ post.title }}</h2>
      <p>Név: {{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const users = ref([]);
const posts = ref([]);

onMounted(() => {
  axios.get('http://localhost:3000/users')
    .then(response => {
      users.value = response.data;
    })
    .catch(error => {
      console.log(error);
    });
})

function GetPosts(id){
  axios.get(`http://localhost:3000/posts?userId=${id}`)
    .then(response => {
      posts.value = response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
</script>

<style scoped>
#app{
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.user{
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
  #posts{
    border-radius: 15px;
    margin: auto;
    max-width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #343a40;
  }
</style>
