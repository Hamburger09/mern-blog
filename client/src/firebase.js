// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7d6b4.firebaseapp.com",
  projectId: "mern-blog-7d6b4",
  storageBucket: "mern-blog-7d6b4.appspot.com",
  messagingSenderId: "463360193569",
  appId: "1:463360193569:web:f9713c6becb87813961f60",
  measurementId: "G-FTB0YMBWLK"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);