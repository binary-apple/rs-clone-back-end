import { config } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

import admin from 'firebase-admin';
import serviceAccount from "../environment-variables.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);