<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Madarak</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.wrapper{
  margin: auto;
  max-width: fit-content;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: xx-large;
}

</style>
