// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARv-OSXDPd3Q6ZL5ePi48TvqzopA6QkiI",
  authDomain: "simply-news-6a615.firebaseapp.com",
  projectId: "simply-news-6a615",
  storageBucket: "simply-news-6a615.appspot.com",
  messagingSenderId: "856076046607",
  appId: "1:856076046607:web:3ac18f5b57de5cc0572e7a",
  measurementId: "G-L8LX22LZ87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
