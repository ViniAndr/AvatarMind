// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPILLVbkOvibZ5oKo6pcOv3WihB9olH5g",
  authDomain: "avatarmind-feb74.firebaseapp.com",
  projectId: "avatarmind-feb74",
  storageBucket: "avatarmind-feb74.appspot.com",
  messagingSenderId: "152107385561",
  appId: "1:152107385561:web:81908d8aa8e2326d42b4c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Criação minha
// chamando o bando de dados
const db = getFirestore(app);

//exporta o banco de dados
export { db };
