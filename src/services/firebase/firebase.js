// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKruUd36H01V6YMz57ecBtN874rulP84M",
  authDomain: "my-project-97152-af776.firebaseapp.com",
  projectId: "my-project-97152-af776",
  storageBucket: "my-project-97152-af776.appspot.com",
  messagingSenderId: "203096629873",
  appId: "1:203096629873:web:ad2c5e727eccce924831d0",
  measurementId: "G-RW53JLVY1J"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
    app, auth, db, getFirestore, setDoc, getDoc, doc
}