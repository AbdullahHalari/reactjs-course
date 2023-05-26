import firebase from 'firebase'

var firebaseConfig = {
  // Firebase credentials
   apiKey: "AIzaSyDlehUMd2ECFb_t3_fhJvic0jGaRNM8d6I",
    authDomain: "educationwireportal.firebaseapp.com",
    projectId: "educationwireportal",
    storageBucket: "educationwireportal.appspot.com",
    messagingSenderId: "85539684988",
    appId: "1:85539684988:web:e6ad17c156fa174d827ff9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();
export default db;
