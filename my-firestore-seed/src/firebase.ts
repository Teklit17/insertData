import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPnd2UmV0RFGLE1tDsTtPq3Utxbux0bpg",
  authDomain: "bible-memorise.firebaseapp.com",
  projectId: "bible-memorise",
  storageBucket: "bible-memorise.firebasestorage.app",
  messagingSenderId: "503564994060",
  appId: "1:503564994060:web:b5661cf0a14592e455d029",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Login function
export async function login() {
  const email = "tekghe001@gmail.com";
  const password = "123456";

  await signInWithEmailAndPassword(auth, email, password);
  console.log("✅ Logged in as", email);
}
