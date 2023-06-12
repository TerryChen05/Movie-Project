<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const store = useStore();
const email = ref();
const password = ref();
let incorrect = ref();

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    store.user = user;
    router.push("/purchase");
  } catch (error) {
    console.log(error);
    incorrect.value = `Incorrect e-mail or password`;
  }
};
</script>

<template>
  <div>
    <h1>Sign In</h1>
    <form class="login-box" @submit.prevent="loginViaEmail()">
      <input
        class="login-info"
        type="email"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="login-info"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input class="login-button" type="submit" value="Login" />
      <button type="button" @click="router.push('./register')">Sign Up</button>
      <p id="error-message">{{ incorrect }}</p>
    </form>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
    font-family: Righteous;
    font-size: 1em;
}
.login-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin:auto;
  align-items: center;
  transform: translateY(50%);
}

input {
  padding: 1em;
  margin: auto;
}
.login-button {
  margin: 1em;
  border-radius: 30px;
  background-color: #0dbe60;
}

</style>