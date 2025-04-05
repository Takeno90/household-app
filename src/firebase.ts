// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv1azqJNIJCFkIToIDdgh77gQCOrQ8n-Q",
    authDomain: "householdtypescript-aafdb.firebaseapp.com",
    projectId: "householdtypescript-aafdb",
    storageBucket: "householdtypescript-aafdb.firebasestorage.app",
    messagingSenderId: "385392100542",
    appId: "1:385392100542:web:e39b48ad30e26b82900aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };