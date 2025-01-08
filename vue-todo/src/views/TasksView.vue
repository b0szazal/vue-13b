<template>
  <main>
    <div v-for="task in tasksStore.tasks" :key="task.id">
      <h2>{{ task.id }}</h2>
      <p>{{ task.name }}</p>
      <p>{{ task.description }}</p>
      <p>{{ task.completed }}</p>
      <p>{{task.deadline  }}</p>
    </div>
  </main>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasksStore';
const tasksStore = useTasksStore();
</script>

<style scoped>
  main{
    font-family: Arial, sans-serif;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
  }
</style>