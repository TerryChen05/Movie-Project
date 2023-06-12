<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";


const store = useStore();
const router = useRouter();
</script>

<template>
  <button  class="purchase-button" @click="router.push('/purchase')">Movies</button>
  <strong><div class="cart-title">SHOPPING CART</div></strong>
  <div>
    <div class="shopbox" v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <h1>$1.00</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
* {
  margin-top: 30px;
}
img {
  border: 4px solid #0dbe60;
  margin-left: 50px;
}
h1 {
  transform: translate(40%, 250px);
  text-shadow: #0e0b0b 2px 2px 3px;
  font-size: 20px;
  color: #f3f1f1;
}
.cart-title {
  display: inline-block;
  font-size: 50px;
  margin-left: 20%;
  color: #f3f1f1;
  text-shadow: #47fc00c0 2px 2px 3px;
}
.purchase-button {
  background-color: #0dbe60;
  margin: 5px;
  font-size: 1.5em;
  padding: 12px;
  border-radius: 15px;
  width: 8%;
}
</style>