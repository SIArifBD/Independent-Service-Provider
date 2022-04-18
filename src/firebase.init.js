// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA9s-Prm7HQLZFsjmeLqRGSEbh934F2tM",
    authDomain: "tutor-hiring.firebaseapp.com",
    projectId: "tutor-hiring",
    storageBucket: "tutor-hiring.appspot.com",
    messagingSenderId: "412558371797",
    appId: "1:412558371797:web:5398481827dea57372eb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;