// Import the functions you need from the SDKs you need
"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7LUUJgYQLEjzeAqN1J_ZGvYXbe7co-c8",
  authDomain: "simple-firebase-a1227.firebaseapp.com",
  projectId: "simple-firebase-a1227",
  storageBucket: "simple-firebase-a1227.appspot.com",
  messagingSenderId: "838175515647",
  appId: "1:838175515647:web:cf2bc3074c091e34aa3dca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
