import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase_credentials.js";
import { getStorage } from "firebase/storage";


export function dbConfig(){

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  return db;
}

export function storageConfig(){

  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  return storage;
}
