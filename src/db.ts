import { config } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

import admin from 'firebase-admin';
// import serviceAccount from "../environment-variables.json";
import dotenv from 'dotenv';

dotenv.config();

const {
  type,
  projectId,
  privateKeyId,
  privateKey,
  clientEmail,
  clientId,
  authUri,
  tokenUri,
  auth_provider_x509_cert_url,
  client_x509_cert_url
} = process.env;

const serviceAccount = {
  type,
  projectId,
  privateKeyId,
  privateKey,
  clientEmail,
  clientId,
  authUri,
  tokenUri,
  auth_provider_x509_cert_url,
  client_x509_cert_url
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);