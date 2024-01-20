// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, Firestore, DocumentReference } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordAuth,
  signInWithEmailAndPassword as signInWithEmailAndPasswordAuth,
  signOut as signOutAuth,
  User,
  onAuthStateChanged as onAuthStateChangedAuth
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Sq3mqpLSWVxFe9H9ntLy6YSPZ1Lk8yI",
  authDomain: "kahve-dunyasi-53d37.firebaseapp.com",
  projectId: "kahve-dunyasi-53d37",
  storageBucket: "kahve-dunyasi-53d37.appspot.com",
  messagingSenderId: "686274692726",
  appId: "1:686274692726:web:9929593e9b180badcf4157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

const auth = getAuth();
const usersCollection = collection(db, 'users');

// Type definition for the createUserWithEmailAndPassword function
type CreateUserWithEmailAndPassword = (
  auth: ReturnType<typeof getAuth>,
  email: string,
  password: string
) => Promise<{ user: User }>;

// Type definition for the signInWithEmailAndPassword function
type SignInWithEmailAndPassword = (
  auth: ReturnType<typeof getAuth>,
  email: string,
  password: string
) => Promise<{ user: User }>;

// Type definition for the signOut function
type SignOut = (auth: ReturnType<typeof getAuth>) => Promise<void>;

// Type definition for the onAuthStateChanged function
type OnAuthStateChanged = (
  auth: ReturnType<typeof getAuth>,
  callback: (user: User | null) => void
) => () => void;

// Exported functions with type definitions
export const createUserWithEmailAndPassword: CreateUserWithEmailAndPassword = createUserWithEmailAndPasswordAuth;
export const signInWithEmailAndPassword: SignInWithEmailAndPassword = signInWithEmailAndPasswordAuth;
export const signOut: SignOut = signOutAuth;
export const onAuthStateChanged: OnAuthStateChanged = onAuthStateChangedAuth;

export {
  db,
  auth,
  usersCollection,
  firebaseConfig,
  collection
};