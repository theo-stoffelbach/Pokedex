import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZqiKxOaKx5oE02MGxUEpjxj0n8CxhhLQ",
  authDomain: "pokedex-b1691.firebaseapp.com",
  databaseURL: "https://pokedex-b1691-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokedex-b1691",
  storageBucket: "pokedex-b1691.appspot.com",
  messagingSenderId: "760827219857",
  appId: "1:760827219857:web:5a47455344b219eafa9430",
  measurementId: "G-L1SRE9VV05"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
