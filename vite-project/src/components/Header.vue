<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
    <div class="container">
        <div class="header-container">
            <h1>Monkey</h1>
            <img src="../assets/images/logo.png" width="250" height="250"
                style="border:4px solid#fff700;border-radius: 130px">
            <h1 class="movie-header">Movies</h1>
        </div>
        <div class="button-container">
            <button @click="router.push('/login')">Login</button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
    font-family: Righteous;
    margin: 0;
    padding: 0;
}
.container:not(.header-container):not(.button-container) {
    background-image: url("../assets/images/header.jpg");
    background-position: 30% 60%;
}
.header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
}

.header-container h1:nth-child(3) {
    color: #d60718;
}

h1 {
    padding: 1em;
    font-size: 40px;
    text-shadow: #000 1px 1px 1px;
    color: #1ccb13;
}


button {
    width: 150px;
    height: 50px;
    display: block;
    margin: auto;
    border-radius: 50px;
    font-size: 20px;
    background-image: url("../assets/images/buttonbob.jpg");
    background-size: cover;
    background-position: 0% 45%;
    margin-bottom: 10px;
    color: rgb(77, 24, 100);
}

.button-container {
    padding: 1.3em;
}
</style>