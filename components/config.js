// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlIYCCgKaHoJlIpsiW9TjOBiImpC3Bhb0",
  authDomain: "food-app-14e58.firebaseapp.com",
  projectId: "food-app-14e58",
  storageBucket: "food-app-14e58.appspot.com",
  messagingSenderId: "822324066834",
  appId: "1:822324066834:web:6afc84662597c3adc0f6cb",
  measurementId: "G-GV0NV9Q6ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});