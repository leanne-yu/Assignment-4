<script setup>
  import MovieData from "./components/getMovie.vue";
</script>

<template>
    <div class="apps">
        <Suspense>
            <MovieData />
        </Suspense>
    </div>
</template>

<style scoped>
    .apps {
        display: flex;
        text-align: center;
        justify-content: center;
        margin-left: 22%;
        margin-right: 22%;
        font-family: "Lato", sans-serif, system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgb(127, 125, 255);
        font-size: 18px;
    }
</style>
