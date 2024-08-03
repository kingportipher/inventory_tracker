// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUMx0Ud7syFxNHCMGb8qPYs-EkaBuArvo",
  authDomain: "inventory-eee1c.firebaseapp.com",
  projectId: "inventory-eee1c",
  storageBucket: "inventory-eee1c.appspot.com",
  messagingSenderId: "669098587264",
  appId: "1:669098587264:web:fce9cbe2e78c0eb43e6265",
  measurementId: "G-E9YH1F2RDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);


export {firestore}