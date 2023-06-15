<script setup></script>

<template>
  <div class="hero-container">
    <h1>Unlimited movies, TV shows, and more!</h1>
    <h2>Purchase your favorite movies today!</h2>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Secular+One&display=swap');

* {
    font-family: Secular One;
}

.hero-container {
  display: block;
  margin: auto;
  height: 90vh;
  background-image: url('../assets/images/herobg.jpg');
  background-size: cover;
  background-position: 0% 30%;

}

h1 {
  background-image: linear-gradient(45deg, #1d53d1, #d3109c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(110%);
  font-size: 60px;
}

h2 {
  color: rgb(247, 0, 148);
  text-shadow: #000 2px 2px 3px;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;
  align-items: center;
  transform: translateY(120%);
  font-size: 30px;
}
</style>