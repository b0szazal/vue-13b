<template>
  <div class="container">
    <header>
      <div class="wrapper w-auto m-auto d-flex mt-5">
        <nav>
          <RouterLink to="/" class="m-5">Termkékek</RouterLink>
          <RouterLink to="/cart" class="m-5">Kosár</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './stores/productStore.js';
import { onMounted } from 'vue';

const boltstore = useProductStore(); 

onMounted( () => {
  boltstore.fetchProducts();
})
</script>
<style scoped>
.wrapper {
  max-width: fit-content;
  justify-content: center;
}
</style>
