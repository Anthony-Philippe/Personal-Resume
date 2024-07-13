/**
 * @module /config/firebase
 * @fileoverview This file initializes the Firebase app, Firestore, and Storage
 * It exports the Firestore and Storage instances to be used in other parts of the app
 */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
