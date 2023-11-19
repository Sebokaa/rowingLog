// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ9lLzK8eZ-NGqoiA-d_k1m8dueBG7QQM",
  authDomain: "rowinglog-8249e.firebaseapp.com",
  projectId: "rowinglog-8249e",
  storageBucket: "rowinglog-8249e.appspot.com",
  messagingSenderId: "960123536883",
  appId: "1:960123536883:web:56da7b8dc1d8e3980cfe86",
  measurementId: "G-7WQKLJE600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;