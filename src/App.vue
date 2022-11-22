<script setup>
  import { ref } from "vue"
  const data = ref(null)
</script>

<template>
<body>
    <div class="container">
    <div class="header">Pick A Movie!</div>
    <div class="select">
        <select name="Movies" id="Movies">
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
    </div>
        <div id="div1"></div>
    </div>
</body>
</template>

<style scoped>
</style>
