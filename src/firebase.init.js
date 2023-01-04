// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEKAi0ihhh-fgEhV0Z9I3V2LwqItEDA8M",
  authDomain: "ema-john-2e23c.firebaseapp.com",
  projectId: "ema-john-2e23c",
  storageBucket: "ema-john-2e23c.appspot.com",
  messagingSenderId: "996138205560",
  appId: "1:996138205560:web:1b66fe91e00a8b1f7f088d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;