<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import { getDoc, doc, setDoc } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const store = useStore();
const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Passwords don't match!");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  router.push("/purchase");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      passwordOne.value
    );
    store.user = user;
    const cartDoc = await getDoc(doc(firestore, "carts", user.email));

    if (cartDoc.exists()) {
      store.cart = cartDoc.data().cart;
    } else {
      store.cart = [];
    }
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
};

const registerViaGoogle = async () => {
  const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
  store.user = user;
  const cartDoc = await getDoc(doc(firestore, "carts", user.email));

  if (cartDoc.exists()) {
    store.cart = cartDoc.data().cart;
  } else {
    await setDoc(doc(firestore, "carts", user.email), { cart: [] });
    store.cart = [];
  }
  router.push("/purchase");
};
</script>

<template>
  <div class="login-container">
    <h1>Sign In</h1>
    <form class="login-box" @submit.prevent="loginViaEmail()">
      <input class="login-info" type="email" placeholder="Email" v-model="email" />
      <input
        class="login-info"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input class="login-button" type="submit" value="Login" />
      <p id="error-message">{{ incorrect }}</p>
    </form>
    <button class="google-login" @click="registerViaGoogle()">Login with Google</button>
    <button type="button" @click="router.push('./register')">Sign Up</button>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

* {
  font-family: Righteous;
  font-size: 1em;
}
.login-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: auto;
  align-items: center;
  transform: translateY(50%);
}

input {
  padding: 1em;
  margin: auto;
}
.login-button {
  margin: 1em;
  border-radius: 20px;
  background-color: #0dbe60;
}
.google-login {
  background-color: #0dbe60;
}
</style>
