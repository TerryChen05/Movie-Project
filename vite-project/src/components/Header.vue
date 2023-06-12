<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
    <div class="header-container">
        <h1>Monkey</h1>
        <img src="../assets/images/logo.png" width="250" height="250" style="border:4px solid#eeff00;border-radius: 125px">
        <h1>Movies</h1>
    </div>
    <div class="button-container">
        <button @click="router.push('/login')">Login</button>
        <button @click="router.push('/register')">Reg</button>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
    font-family: Righteous;
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
    color: #0dbe60;
}

button {
    width: 150px;
    height: 50px;
    display: block;
    margin: auto;
    border-radius: 50px;
    font-size: 20px;
    background-color: #0dbe60;
}

.button-container {
    padding: 1.5em;
}

</style>