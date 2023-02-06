import { config } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(app);