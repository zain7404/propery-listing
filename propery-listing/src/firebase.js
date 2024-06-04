// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "property-599e1.firebaseapp.com",
    projectId: "property-599e1",
    storageBucket: "property-599e1.appspot.com",
    messagingSenderId: "805556772269",
    appId: "1:805556772269:web:1d03af57d9eeedd9e69524"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);