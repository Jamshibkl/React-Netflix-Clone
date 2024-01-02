import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAp0zH1AwjyLWEJCvC0nMWXvArru4fk2Y",
  authDomain: "netflix-dcb73.firebaseapp.com",
  projectId: "netflix-dcb73",
  storageBucket: "netflix-dcb73.appspot.com",
  messagingSenderId: "877886712015",
  appId: "1:877886712015:web:8215f7810900eba80aafba",
  measurementId: "G-G7GME1CVNY"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
