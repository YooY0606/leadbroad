// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGTek49TP3GApS_Su3QIvo1NtiajJnuPg",
  authDomain: "blood-proje.firebaseapp.com",
  projectId: "blood-proje",
  storageBucket: "blood-proje.appspot.com",
  messagingSenderId: "545318242863",
  appId: "1:545318242863:web:41065c8cc16fd75f2d14da",
  measurementId: "G-F0G80R9MGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {db}

