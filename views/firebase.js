// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlPjnuYwG16p53Tv8z_uuFaduiU8fjPqo",
    authDomain: "beige-social-network.firebaseapp.com",
    projectId: "beige-social-network",
    storageBucket: "beige-social-network.appspot.com",
    messagingSenderId: "912915006606",
    appId: "1:912915006606:web:3abaa1c8ea632070f4f5df"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };