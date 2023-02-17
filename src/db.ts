import { config } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { AuthErrorCodes, getAuth } from "firebase/auth";

import admin from "firebase-admin";

// import serviceAccount from "../service-account.json";

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });



// admin.auth().createUser({
//     email: '1example@test.com',
//     password: 'i love nonograms'
// })


// async function tmp() {
//     const user = await admin.auth().getUserByEmail('lantamus@gmail.com');
    
//     console.log(user.uid, user);
// }
// tmp();

// let defaultAuth = getAuth();
// let defaultDatabase = getDatabase(adminApp);

const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);