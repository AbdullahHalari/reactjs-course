// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlehUMd2ECFb_t3_fhJvic0jGaRNM8d6I",
    authDomain: "educationwireportal.firebaseapp.com",
    projectId: "educationwireportal",
    storageBucket: "educationwireportal.appspot.com",
    messagingSenderId: "85539684988",
    appId: "1:85539684988:web:e6ad17c156fa174d827ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
var db = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();
 
export default db;
