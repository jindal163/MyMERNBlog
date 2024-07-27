// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_nHNFOdLB-nP7ZgPHCBtsjIYCB-xd3M4",
  authDomain: "mymernblog.firebaseapp.com",
  projectId: "mymernblog",
  storageBucket: "mymernblog.appspot.com",
  messagingSenderId: "740831213872",
  appId: "1:740831213872:web:e22599144f71b82c30b0f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);