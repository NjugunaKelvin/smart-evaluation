// Firebase Client Configuration
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAWruPbGCJdCERqTDN_pCBDrnh1z0IcBn4",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "opportunities-portal-d2206.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "opportunities-portal-d2206",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "opportunities-portal-d2206.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "494908303788",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:494908303788:web:646be6650de6e73964b209"
};

// Initialize Firebase (only if not already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

// Google Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
