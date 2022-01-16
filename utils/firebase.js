import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCn0O7rJY1CL7V-1GysVUiUW205D4PtOeo",
    authDomain: "bts-quotes-quiz.firebaseapp.com",
    projectId: "bts-quotes-quiz",
    storageBucket: "bts-quotes-quiz.appspot.com",
    messagingSenderId: "129685702704",
    appId: "1:129685702704:web:59ad1c22fd8f7e6d79c5f5",
    measurementId: "G-MKZ4TX574Y"
};

if (!firebase.apps.length) {
    initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };
