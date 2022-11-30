<script setup>
import MovieData from "./components/MovieData.vue";
</script>

<template>
  <div class="app">
    <Suspense>
      <MovieData />
    </Suspense>
  </div>
</template>

<style scoped>

</style>
