import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu4NzH82q9kvufvycBhoM6k3i5qfliSqE",
  authDomain: "daily-earn-bd-7d0ec.firebaseapp.com",
  databaseURL: "https://daily-earn-bd-7d0ec-default-rtdb.firebaseio.com",
  projectId: "daily-earn-bd-7d0ec",
  storageBucket: "daily-earn-bd-7d0ec.firebasestorage.app",
  messagingSenderId: "1015024045016",
  appId: "1:1015024045016:web:1612135c5a0064d239c0ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
