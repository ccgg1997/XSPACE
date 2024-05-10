// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZdGZckpAlv4CCGXFer-3ia_zVJdVxZ6M",
    authDomain: "xspace-game.firebaseapp.com",
    projectId: "xspace-game",
    storageBucket: "xspace-game.appspot.com",
    messagingSenderId: "678214123545",
    appId: "1:678214123545:web:9ff2e1235b1d86bc286a88",
    measurementId: "G-B624QZJQN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
