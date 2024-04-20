// Import the functions you need from the SDKs you need
"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCarq6IsJ7v9NNrvbHWfjqaAQ8-XnCJXMI",
  authDomain: "share-room-a6681.firebaseapp.com",
  projectId: "share-room-a6681",
  storageBucket: "share-room-a6681.appspot.com",
  messagingSenderId: "28521751630",
  appId: "1:28521751630:web:63fda86f06afb897e1cf1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
