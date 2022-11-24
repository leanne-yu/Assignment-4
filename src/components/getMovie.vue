<script>
    import { ref } from "vue";
    import axios from "axios";

    const movie = ref("");
    const response = ref(null);

    const getMovie = async (id) => {
        response.value = (
            await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    api_key: "ab590dbfc1eb546b5263a30c390d2d07",
                },
            })
        ).data;
    };
</script>

<template>
    <select v-model="movie">
        <option value = "164">Breakfast at Tiffany's</option>
        <option value = "718930">Bullet Train</option>
        <option value = "337404">Cruella</option>
        <option value = "545611">Everything Everywhere All at Once</option>
        <option value = "13">Forrest Gump</option>
        <option value = "644495">House of Gucci</option>
        <option value = "402900">Ocean's Eight</option>
        <option value = "496243">Parasite</option>
        <option value = "2109">Rush Hour</option>
        <option value = "129">Spirited Away</option>
    </select>
    <button @click="getMovie">get</button>
    <div v-if="response">
        <p>Original Title: {{ response.originaltitle }}</p>
        <p>Overview: {{ response.overview }}</p>
        <p>Release Date: {{ response.releasedate }}</p>
        <p>Runtime: {{ response.runtime }}</p>
        <p>Original Language: {{ response.originallanguage }}</p>
        <p>Popularity: {{ response.popularity }}</p>
        <p>Vote Average: {{ response.voteaverage }}</p>
        <p>Budget: {{ response.budget }}</p>
    </div>
</template>