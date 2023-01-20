// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhlW3ge5t-abvKhBsjiSzRZAtNDfgsOyY',
  authDomain: 'toon-prac.firebaseapp.com',
  projectId: 'toon-prac',
  storageBucket: 'toon-prac.appspot.com',
  messagingSenderId: '832862991259',
  appId: '1:832862991259:web:d583964c6846def494673e',
  measurementId: 'G-0TFYQ2QTZ3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
export const db = getFirestore();
