/**
 * @module /config/firebase
 * @fileoverview This file initializes the Firebase admin SDK and exports the admin object
 */
import firebase from 'firebase-admin';
import credentials from './serviceAccountKey.json' assert { type: "json" };

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
});

export {firebase};