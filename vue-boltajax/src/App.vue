<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper w-auto m-auto d-flex mt-5">
      <nav>
        <RouterLink to="/" class="m-5">Termkékek</RouterLink>
        <RouterLink to="/cart" class="m-5">Kosár</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView  class="mt-4"/>
</template>

<style scoped>
.wrapper {
  max-width: fit-content;
  justify-content: center;
}
</style>
