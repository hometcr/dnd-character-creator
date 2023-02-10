// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA20eQPg4EBoDg-SAp7eped5wuN4JUQvL8",
  authDomain: "caitlyns-dnd-character-creator.firebaseapp.com",
  projectId: "caitlyns-dnd-character-creator",
  storageBucket: "caitlyns-dnd-character-creator.appspot.com",
  messagingSenderId: "355453602797",
  appId: "1:355453602797:web:68047ae6e01687a01ab5e4",
  measurementId: "G-Q0HBYJPWZ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authorization
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);
