// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR27uLmQPP85ma4ZtXjFR7tuzMkdoVCGQ",
  authDomain: "riseaddisproperties.firebaseapp.com",
  projectId: "riseaddisproperties",
  storageBucket: "riseaddisproperties.appspot.com",
  messagingSenderId: "86084333785",
  appId: "1:86084333785:web:15cb72e16739e936b18ec8",
  measurementId: "G-7EDG7ZVJF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
