<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDoc, doc } from "@firebase/firestore";

const store = useStore();
const router = useRouter();
const email = ref();
const password = ref();
const confirmPassword = ref();

const registerViaEmail = async () => {
  if (password.value != confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  );
  store.user = user;
  router.push("./purchase");
};

const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = signInWithPopup(auth, provider);
  store.user = user;
  const { cart } = (await getDoc(doc(firestore, "carts", user.email))).data();
  store.cart = cart;
};
</script>

<template>
  <div class="auth-container">
    <div >
      <h1>Register with Google</h1>
      <button class="google-button" @click="registerViaGoogle()">Google</button>
    </div>
    <h1>Register with email</h1>
    <form @submit.prevent="registerViaEmail()">
      <input v-model="email" type="email" placeholder="Enter Email" />
      <input v-model="password" type="password" placeholder="Enter Password" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <input class="reg-button" type="submit" value="Register" />
    </form>
    <button class="login-button" type="button" @click="router.push('./login')">Log in</button>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
    font-family: Righteous;
    font-size: 1em;
}
.auth-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin:auto;
  align-items: center;
  transform: translateY(60%);
}

input {
  padding: 1em;
  margin: auto;
}
button {
  margin: 1em;
  border-radius: 20px;
  background-color: #1b84c6;
  padding: 15px;
}
h1 {
  padding: 5px;
}
.google-button {
  transform: translateX(25%);
}
.reg-button {
  background-color: #1b84c6;
  border-radius: 20px;
  transform: translateX(20%);
}

</style>