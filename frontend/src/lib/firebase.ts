import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzZa1GiQXX-bb4XwJ4lsM-iZxxglN4oxE",
  authDomain: "tp-inf438.firebaseapp.com",
  projectId: "tp-inf438",
  storageBucket: "tp-inf438.firebasestorage.app",
  messagingSenderId: "456317696702",
  appId: "1:456317696702:web:e302c7aa3139e3b8273cef",
  measurementId: "G-2L75FT33QN"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
