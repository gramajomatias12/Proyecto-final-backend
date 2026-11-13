import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
projectId: "back-node-2ebca",
storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
messagingSenderId: "784806927394",
appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
export { db };