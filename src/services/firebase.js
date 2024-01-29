// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default analytics;