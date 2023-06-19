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
const emailTwo = ref("");
const passwordThree = ref("");

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
  await setDoc(doc(firestore, "carts", user.email), { cart: [] });

  store.user = user;
  emailTwo.value = email.value;
  passwordThree.value = passwordOne.value;
  router.push("/purchase");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      emailTwo.value,
      passwordThree.value
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
    <h1>Register via Email</h1>
    <form class="setup" @submit.prevent="registerViaEmail()">
      <input v-model="email" type="email" placeholder="email" />
      <input v-model="passwordOne" type="password" placeholder="Enter Password" />
      <input v-model="passwordTwo" type="password" placeholder="Re-enter Password" />
      <input class="register-button" type="submit" value="Register" />
    </form>
    <h1>Sign In</h1>
    <form class="login-box" @submit.prevent="loginViaEmail()">
      <input class="login-info" type="email" placeholder="Email" v-model="emailTwo" />
      <input
        class="login-info"
        type="password"
        placeholder="Password"
        v-model="passwordThree"
      />
      <input class="login-button" type="submit" value="Login" />
    </form>
    <button class="google-login" @click="registerViaGoogle()">Login with Google</button>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

* {
  font-family: Righteous;
  font-size: 1em;
}

.login-container {
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: auto;
  align-items: center;
  transform: translateY(25vh);
  border: 1px solid black;
}

.login-container h1:first-child {
  margin-bottom: 15px;
}

.setup {
  margin-bottom: 15px;
}

input,
button {
  padding: 1em;
}

.login-button,
.google-login,
.register-button {
  margin: 1em;
  border-radius: 20px;
  background-color: #ff2929;
  color: rgb(235, 239, 245);
}
</style>
