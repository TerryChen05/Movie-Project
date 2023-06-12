<script setup></script>

<template>
  <div class="hero-container">
    <h1>ALL YOUR FAVORITE MOVIES IN ONE SPOT!</h1>
    <h2>PURCHASE MOVIES FROM MONKEY MOVIES TODAY!</h2>
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
  width: 80vw;
  height: 50vh;
  background-image: url('../assets/images/herobg.png');
  background-size: cover;
  background-position: 90%, 90%;

}
h1 {
  color: rgb(245, 14, 60);
  text-shadow: #000 2px 2px 3px;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(100%);
  font-size: 30px;;
}
h2 {
  color: rgb(247, 0, 148);
  text-shadow: #000 2px 2px 3px;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;
  transform: translateY(40%);
  font-size: 20px;
}
</style>