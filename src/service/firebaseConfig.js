// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4kuq0EwmpV8gp7jNQbWbiPz4TcucHUR4",
  authDomain: "trip-planner-d83b7.firebaseapp.com",
  projectId: "trip-planner-d83b7",
  storageBucket: "trip-planner-d83b7.appspot.com",
  messagingSenderId: "571762618861",
  appId: "1:571762618861:web:03811bcf9b9ed6b1fd37e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
