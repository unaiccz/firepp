// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const config = {
  apiKey: "AIzaSyCOk9hpdfHM5mKkiu6_xYAK0o-N7AqrcU0",
  authDomain: "prueba02-8923f.firebaseapp.com",
  projectId: "prueba02-8923f",
  storageBucket: "prueba02-8923f.appspot.com",
  messagingSenderId: "1040943654502",
  appId: "1:1040943654502:web:1de55bd694eb5e9bea6fa7",
  measurementId: "G-L5BFPTNQ0K"
};

// Initialize Firebase
const app = initializeApp(config);
const auth = getAuth(app);
export  const llogin = ({email, password}) => {
  return signInWithEmailAndPassword(auth, email, password)
}