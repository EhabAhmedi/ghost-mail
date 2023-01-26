import firebase from 'firebase'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFGYe2hAarBuwyrIU5A6YCB6iiI6ArfeY",
  authDomain: "fir-af790.firebaseapp.com",
  databaseURL: "https://fir-af790-default-rtdb.firebaseio.com",
  projectId: "fir-af790",
  storageBucket: "fir-af790.appspot.com",
  messagingSenderId: "603740121147",
  appId: "1:603740121147:web:5c87b5d3e2529a06e7141e",
  measurementId: "G-E95D3DF7EN"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider};