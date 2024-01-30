import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCJ3slfTRgXgcBUyZ4_DtT7z3w6tgl-H-w",
  authDomain: "gerenciador-encomendas.firebaseapp.com",
  projectId: "gerenciador-encomendas",
  storageBucket: "gerenciador-encomendas.appspot.com",
  messagingSenderId: "679758674234",
  appId: "1:679758674234:web:b302b3413ecf142e383803",
  measurementId: "G-4V6Y5FPDXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};