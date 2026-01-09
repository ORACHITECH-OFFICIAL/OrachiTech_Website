import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQ-ijNWPjM0N2b4sfnFcXwe32a3aRBPXw",
  authDomain: "orachi-tech-d5e5a.firebaseapp.com",
  projectId: "orachi-tech-d5e5a",
  storageBucket: "orachi-tech-d5e5a.firebasestorage.app",
  messagingSenderId: "525209512618",
  appId: "1:525209512618:web:1597779e30f3a37913bed3",
  measurementId: "G-JJ0ZB09Y95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
