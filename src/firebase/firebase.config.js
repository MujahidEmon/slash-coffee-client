// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoayEp4dLIcKbsZ9S7Y43KejiYRl9-7zk",
  authDomain: "slash-coffee-emporium.firebaseapp.com",
  projectId: "slash-coffee-emporium",
  storageBucket: "slash-coffee-emporium.firebasestorage.app",
  messagingSenderId: "874592196953",
  appId: "1:874592196953:web:d0f613d526454f855a5448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;