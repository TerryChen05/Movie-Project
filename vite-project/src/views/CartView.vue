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
  margin-left: 10em;
  padding-bottom: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;
  border: 1px solid black;
  width: 75%;
  background-color: #7d7d7d;
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
  text-shadow: #ff2929 2px 2px 3px;
  font-size: 20px;
  color: #f1efef;
}
.cart-title {
  display: inline-block;
  font-size: 50px;
  margin-left: 28%;
  color: rgb(235, 239, 245);
  text-shadow: #ff2929 4px 4px 4px;
}
.purchase-button {
  color: rgb(235, 239, 245);
  background-color: #ff2929;
  margin: 5px;
  font-size: 1.5em;
  padding: 12px;
  border-radius: 15px;
  width: 8%;
  margin-left: 20px;
}

.remove-but {
  height: 50px;
  transform: translate(150%, 200%);
  margin: 1em;
  border-radius: 20px;
  background-color: #ff2929;
  color: rgb(235, 239, 245);
  cursor: pointer;
}
</style>