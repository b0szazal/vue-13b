<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <div class="container">
        <nav class="text-center">
          <RouterLink class="btn btn-primary m-3" to="/">Szavazok</RouterLink>
          <RouterLink class="btn btn-primary m-3" to="/eredmeny">Eredmény</RouterLink>
        </nav>
          <RouterView />
      </div>
</template>
