// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9d35EAuKD_X0ojzWZAOixcxxGEvbXif0",
  authDomain: "mern-blog-4edfd.firebaseapp.com",
  projectId: "mern-blog-4edfd",
  storageBucket: "mern-blog-4edfd.appspot.com",
  messagingSenderId: "359384234746",
  appId: "1:359384234746:web:64037ca3da8a7cf0a2a743"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);