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
          <h1>Release date: {{ movie.release_date }}</h1>
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
  background-image: url("../assets/images/amogus.avif");
  background-size: 100%;
  background-position: 100px;
  width: clamp(280px, 100%, 900px);
  height: 50vh;
  position: relative;
  padding: 1em;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 10px;
  padding: 1rem;
  border: none;
  background: #faf4f4;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: white;
}

img {
  width: 200px;
  border-radius: 7%;
}

h1 {
  color: rgb(237, 202, 202);
}

.cart-button {
  transform: translateY(-45%);
  cursor: pointer;
  border: 4px solid red;
}

button {
  padding: 15px 25px;
  text-align: center;
  cursor: pointer;
  color: #070505;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

button:hover {
  background-color: #3e8e41;
}

button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(1px);
}
</style>
