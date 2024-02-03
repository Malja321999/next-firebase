// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyC833wluusfbxz-bIjks8t1gUZzM1riyV8",
  authDomain: "nextfirebase2.firebaseapp.com",
  projectId: "nextfirebase2",
  storageBucket: "nextfirebase2.appspot.com",
  messagingSenderId: "773682651234",
  appId: "1:773682651234:web:aeb891c027fa08e5e1713b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
