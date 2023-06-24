import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCm-mmTCxnu8fIzA8iexSbhCU2wpadqtYw",
  authDomain: "urbanedge-10115.firebaseapp.com",
  projectId: "urbanedge-10115",
  storageBucket: "urbanedge-10115.appspot.com",
  messagingSenderId: "712502366969",
  appId: "1:712502366969:web:92a78b1de539f7e4698828",
  measurementId: "G-YQRKW9YFL5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
