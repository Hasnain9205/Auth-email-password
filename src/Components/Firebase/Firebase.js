// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsfG9NV4ou-rbnr_uHpEXzf_5igbd_iaA",
  authDomain: "fir-conseptual-sessions.firebaseapp.com",
  projectId: "fir-conseptual-sessions",
  storageBucket: "fir-conseptual-sessions.appspot.com",
  messagingSenderId: "483270316170",
  appId: "1:483270316170:web:d92cd5370c617855785d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);