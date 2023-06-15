<script setup>
import axios from "axios";
import { useStore } from "../store";
const store = useStore();
const props = defineProps(["id"]);
const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <button @click="$emit('toggleModal')">X</button>
        <div v-if="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <h1>{{ movie.title }}</h1>
          <h2>Release date: {{ movie.release_date }}</h2>
          <button
            class="cart-button"
            type="button"
            @click="store.addToCart(movie.poster_path, movie.title)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}
.modal-outer-container .modal-inner-container {
  background-color: #df4141;
  width: clamp(280px, 100%, 900px);
  height: 55vh;
  position: relative;
  padding: 1em;
}
.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 10px;
  padding: 1rem;
  border: none;
  background: #df4141;
  font-weight: bold;
}
.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: white;
}
img {
  width: 200px;
}
h3 {
    border:4px solid rgb(28, 214, 15);
    width: 10%;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    background-color: aliceblue;
}
.cart-button {
  border: 4px solid green;
}
</style>