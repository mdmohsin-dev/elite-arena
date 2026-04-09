// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0T1lmLra4udOrFpYLFtZ-BNdtUWNvD0c",
  authDomain: "elite-arena-cadcf.firebaseapp.com",
  projectId: "elite-arena-cadcf",
  storageBucket: "elite-arena-cadcf.firebasestorage.app",
  messagingSenderId: "318820647693",
  appId: "1:318820647693:web:14cdcd795e10aef8782644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)