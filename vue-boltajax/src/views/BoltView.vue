<template>
  <div class="row">
    <div v-for="product in productStore.products" class="card m-2">
      <h2 class="card-title text-center">{{ product.name }}</h2>

      <div class="card-body text-center">
        <p>Leírás: {{ product.desc }}</p>
        <p>Készlet: {{ product.store }} {{ product.unit }}</p>
        <p>Ár: {{ product.price }}</p>
      </div>
      <div class="card-footer text-center">
        <button @click="productStore.addToCart(product)" class="btn btn-outline-primary">Kosárba &#128722</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore.js';
import { onMounted } from 'vue';

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