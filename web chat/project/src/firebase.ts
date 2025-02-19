// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDeLc3YyCqho7hZzwyecLEQoe1GGFa2lQ",
  authDomain: "web-chat-2-0.firebaseapp.com",
  projectId: "web-chat-2-0",
  storageBucket: "web-chat-2-0.firebasestorage.app",
  messagingSenderId: "572739059269",
  appId: "1:572739059269:web:d867a80f055eac70d3ad2c",
  measurementId: "G-KYD5ZQW9BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);