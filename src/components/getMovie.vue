<script>
    import { ref } from "vue";
    const movie = ref("");
    const response = ref(null);

    const getMovies = async (id) => {
    const movieData = await getData(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
            api_key: "ab590dbfc1eb546b5263a30c390d2d07",
        }
    });
    return movieData.data;
}
</script>

<template>
    <select name="Movies" id="Movies" v-model="movie">
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
    <button @click="response">get</button>

    <div v-if="response">
        <p>Original Title: {{ response.original_title }}</p>
        <p>img1: {{ img1 }}</p>
        <p>Overview: {{ overview }}</p>
    </div>
</template>