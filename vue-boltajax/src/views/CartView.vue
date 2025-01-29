<template>
    <div class="card m-2 btn btn-outline-primary d-flex align-items-center w-auto m-auto mt-5 mb-5" @click="productStore.order()">
      <span class="fs-4 fw-bold align-self-center"> Renderés leadása </span>
    </div>
  <div class="row">
    <div v-for="item in productStore.cart" class="card m-2">
      <h2 class="card-title text-center">{{ productStore.products.find(p => p.id == item.id).name }}</h2>

      <div class="card-body text-center">
        <p>Kosárban: {{ item.quantity }}</p>
      </div>
      <div class="card-footer text-center">
        <button @click="productStore.removeOneFromCart(item.id)" class="btn btn-outline-primary">Kivétel a kosárból</button>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { useProductStore } from '@/stores/productStore.js';
  import { ref } from 'vue';

  const productStore = useProductStore();

</script>

<style scoped>
.card{
  padding: 10px;
  margin: 10px;
  border: 1px solid #333;
  max-width: 23%;
  min-width: 200px;
  text-wrap: wrap;
}
</style>
