<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";


const store = useStore();
const router = useRouter();

const removeItem = (item) => {
  const index = store.cart.indexOf(item);
  store.removeFromCart(index);
};

</script>

<template>
  <button  class="purchase-button" @click="router.push('/purchase')">Movies</button>
  <strong><div class="cart-title">SHOPPING CART</div></strong>
  <div>
    <div class="shopbox" v-for="movie in store.cart">
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
      <h1>{{ movie.title }}</h1>
      <button class="remove-but" @click="removeItem(item)">Remove</button>
    </div>
  </div>
</template>

<style scoped>
* {
  margin-top: 30px;
}

.shopbox {
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;
}

.shopbox h1 {
  transform: translate(10%, 30%);
}

img {
  border: 4px solid #f7f7f7;
  border-radius: 15%;
  margin-left: 50px;
  width: 15em;
}
h1 {
  transform: translate(40%, 250px);
  text-shadow: #520975 2px 2px 3px;
  font-size: 20px;
  color: #f3f1f1;
}
.cart-title {
  display: inline-block;
  font-size: 50px;
  margin-left: 30%;
  color: #f3f1f1;
  text-shadow: #fc00dfc0 2px 2px 3px;
}
.purchase-button {
  background-color: #c70ad8;
  margin: 5px;
  font-size: 1.5em;
  padding: 12px;
  border-radius: 15px;
  width: 8%;
}

.remove-but {
  height: 50px;
  transform: translate(150%, 200%)
}
</style>