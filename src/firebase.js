import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chat-app-fba6c.firebaseapp.com",
  projectId: "chat-app-fba6c",
  storageBucket: "chat-app-fba6c.appspot.com",
  messagingSenderId: "384808946178",
  appId: "1:384808946178:web:dda2731975c4de8a33351b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
