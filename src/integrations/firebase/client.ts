import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics is optional and must not prevent the CMS from rendering in browsers
// that block IndexedDB/cookies (or in test environments).
const analytics = isSupported().then((supported) => (supported ? getAnalytics(app) : null));

export { app, analytics, auth, db, storage };
