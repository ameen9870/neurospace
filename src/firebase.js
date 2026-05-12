import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRIC66E_0bg8lq3Q7SkltZnPFjy-SzFIQ",
  authDomain: "neurospace-3e867.firebaseapp.com",
  projectId: "neurospace-3e867",
  storageBucket: "neurospace-3e867.firebasestorage.app",
  messagingSenderId: "804294680489",
  appId: "1:804294680489:web:0bdb6eaef7069bcaa42eb8",
  measurementId: "G-ZS5C693EGV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);