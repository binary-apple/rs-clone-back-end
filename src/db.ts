import { config } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from "firebase/auth";

const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);