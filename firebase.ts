import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqNDc5OqWl4jArfFCgiXh0TU0t8GEkwqA",
  authDomain: "chatgpt-clone-e5826.firebaseapp.com",
  projectId: "chatgpt-clone-e5826",
  storageBucket: "chatgpt-clone-e5826.appspot.com",
  messagingSenderId: "269772650654",
  appId: "1:269772650654:web:5e39d39db52ebc6815a38f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };