// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4943a.firebaseapp.com",
  projectId: "mern-blog-4943a",
  storageBucket: "mern-blog-4943a.appspot.com",
  messagingSenderId: "508978841150",
  appId: "1:508978841150:web:69cb1d66207722bb52b36f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
