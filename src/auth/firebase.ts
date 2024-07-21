// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp_XZnncMlM1xCw-CY6R_Ovmqp590jiKY",
  authDomain: "digitalresume-b4058.firebaseapp.com",
  projectId: "digitalresume-b4058",
  storageBucket: "digitalresume-b4058.appspot.com",
  messagingSenderId: "61810860243",
  appId: "1:61810860243:web:1cb0000f42b6f0f6eab426"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
