// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDry_MPj7fV3LTDlR06LDuS38zxGjFdVO0",
  authDomain: "movie-project-store.firebaseapp.com",
  projectId: "movie-project-store",
  storageBucket: "movie-project-store.appspot.com",
  messagingSenderId: "209879285934",
  appId: "1:209879285934:web:b5756cbea2419ee26e2d3f",
  measurementId: "G-9JRT5Y3CSM"
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);