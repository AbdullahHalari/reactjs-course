import { addDoc, collection } from "@firebase/firestore"
import { db } from "./firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendPasswordResetEmail  } from "firebase/auth";

const auth = getAuth();
export function userRegister(userEmail,userPasword) {
createUserWithEmailAndPassword(auth, userEmail, userPasword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ..
  });
}

export async function userLogin(userEmail,userPasword) {
     try {
    await signInWithEmailAndPassword(auth, userEmail, userPasword)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
export  function logOut() {
 signOut(auth).then(() => {
  console.log('signOut')
}).catch((error) => {
  // An error happened.
  console.log(error)
});
}
export async function resetPassword(userEmail) {
     try {
    await sendPasswordResetEmail(auth,userEmail)
    .then(() => {
    // Signed in 
    
    console.log('email sent')
    // ...
  })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}