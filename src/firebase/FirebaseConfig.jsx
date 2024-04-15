// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWPL6Bg7gF8sk0ZNCyJOTvMiSLYgHwh0Y",
  authDomain: "ecommerce-13943.firebaseapp.com",
  projectId: "ecommerce-13943",
  storageBucket: "ecommerce-13943.appspot.com",
  messagingSenderId: "967345082269",
  appId: "1:967345082269:web:5ada093665b8b016c3e974"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }