// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwdRjRpUlzbFkrqDkpRkQlXG20nm8MyzY",
  authDomain: "dev-code-assignment.firebaseapp.com",
  projectId: "dev-code-assignment",
  storageBucket: "dev-code-assignment.appspot.com",
  messagingSenderId: "561777440849",
  appId: "1:561777440849:web:605b789c128dde9771e070",
  measurementId: "G-G36NHKPR5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage()
export const db = getFirestore(app);