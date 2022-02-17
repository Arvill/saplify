import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase_credentials.js";


export function dbConfig(){

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  return db;
}
