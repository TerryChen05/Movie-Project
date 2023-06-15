<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
    <div class="header-container">
        <h1>Monkey</h1>
        <img src="../assets/images/logo.png" width="250" height="250" style="border:4px solid#7c1bc6;border-radius: 125px">
        <h1>Movies</h1>
    </div>
    <div class="button-container">
        <button @click="router.push('/login')">Login</button>
        <button @click="router.push('/register')">Register</button>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
    font-family: Righteous;
    margin: 0;
    padding: 0;
}
.header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
}

h1 {
    padding: 1em;
    font-size: 40px;
    color: #654ee6;
    text-shadow: #000 1px 1px 1px;
}

button {
    width: 150px;
    height: 50px;
    display: block;
    margin: auto;
    border-radius: 50px;
    font-size: 20px;
    background-color: #1b84c6;
    margin-bottom: 10px;
}

.button-container {
    padding: 1.3em;
}

</style>