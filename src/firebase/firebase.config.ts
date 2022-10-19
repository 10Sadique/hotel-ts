// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP-MEm9EXn3br8cIqLYIS1FRBuVZfIqeM",
  authDomain: "hotel-ts.firebaseapp.com",
  projectId: "hotel-ts",
  storageBucket: "hotel-ts.appspot.com",
  messagingSenderId: "1040023321649",
  appId: "1:1040023321649:web:9c026386bbaa586d386910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;