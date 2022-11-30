<script setup>
import { ref } from "vue";
import axios from "axios";

const movie = ref("");
const response = ref(null);

const getMovie = async () => {
  response.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${movie.value}`, {
      params: {
        api_key: "ab590dbfc1eb546b5263a30c390d2d07",
      },
    })
  ).data;
};
</script>

<template>
  <body>
    <div class="header">Pick A Movie!</div>
    <select v-model="movie">
      <option value="164">Breakfast at Tiffany's</option>
      <option value="718930">Bullet Train</option>
      <option value="337404">Cruella</option>
      <option value="545611">Everything Everywhere All at Once</option>
      <option value="13">Forrest Gump</option>
      <option value="644495">House of Gucci</option>
      <option value="402900">Ocean's Eight</option>
      <option value="496243">Parasite</option>
      <option value="2109">Rush Hour</option>
      <option value="129">Spirited Away</option>
    </select>
    <button @click="getMovie">get</button>
    <div v-if="response">
      <h1>{{ response.original_title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${response.poster_path}`" alt="" class="img1">
      <p>Overview: {{ response.overview }}</p>
      <p>Release Date: {{ response.release_date }}</p>
      <p>Runtime: {{ response.runtime }}</p>
      <p>Original Language: {{ response.original_language }}</p>
      <p>Popularity: {{ response.popularity }}</p>
      <p>Vote Average: {{ response.vote_average }}</p>
      <p>Budget: {{ response.budget }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500/${response.backdrop_path}`" alt="" class="img2">
    </div>
  </body>
</template>

<style>
body {
  background-color: rgb(213, 213, 255);
}

.header {
  font-size: 26px;
  font-family: "Fredoka One", sans-serif, system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  padding: 15px;
  color: rgb(114, 112, 255);
}

h1 {
  text-align: center;
  font-family: "Titan One", sans-serif, system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(127, 125, 255);
  font-size: 45px;
  font-weight: lighter;
}

p {
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: "Lato", sans-serif, system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(85, 82, 248);
  margin-left: 22%;
  margin-right: 22%;
}

select {
  display: inline-block;
  text-align: center;
  margin-left: 38%;
  font-family: "Lato", sans-serif, system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(127, 125, 255);
  font-size: 16px;
}

button {
  display: inline-block;
  margin-left: 0.3%;
  color: rgb(127, 125, 255);
  font-size: 16px;
}

.img1 {
  display: flex;
  justify-content: center;
  margin-left: 30%;
}

.img2 {
  display: flex;
  justify-content: center;
  margin-left: 30%;
  padding: 15px;
}
</style>