// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} form "firebase/firestore";

const firebaseConfig = {
    
  apiKey: "AIzaSyAOePHzMfIPmPUuyl9fliAVAvYUqSgkLjg",
  authDomain: "marketplace-c4cd4.firebaseapp.com",
  projectId: "marketplace-c4cd4",
  storageBucket: "marketplace-c4cd4.appspot.com",
  messagingSenderId: "520449174655",
  appId: "1:520449174655:web:ac4c6ecce21fce3662e34a",
  measurementId: "G-4LHBZNB0MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore()