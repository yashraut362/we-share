// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFuI7wCIjzMznis-sP7A9tIdHL4WAwnaQ",
    authDomain: "we-share-19.firebaseapp.com",
    projectId: "we-share-19",
    storageBucket: "we-share-19.appspot.com",
    messagingSenderId: "200505924677",
    appId: "1:200505924677:web:e12a437d46ba1dc3a7d72c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
