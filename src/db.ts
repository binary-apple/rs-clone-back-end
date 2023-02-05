import { initializeApp } from 'firebase/app';
import { config } from './config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(initializeApp(config.firebaseConfig));