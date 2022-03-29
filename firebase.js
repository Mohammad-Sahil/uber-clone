// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PpaaRvZlCVIqU8PHtp4DqUap_kFdz3Y",
  authDomain: "uber-clone-e4fc3.firebaseapp.com",
  projectId: "uber-clone-e4fc3",
  storageBucket: "uber-clone-e4fc3.appspot.com",
  messagingSenderId: "256225870446",
  appId: "1:256225870446:web:aae7fed5de5163d30edc7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }