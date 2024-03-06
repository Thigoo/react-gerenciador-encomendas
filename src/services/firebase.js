import { initializeApp } from 'firebase/app';
import { 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from 'firebase/firestore';
import { 
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider
 } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJ3slfTRgXgcBUyZ4_DtT7z3w6tgl-H-w',
  authDomain: 'gerenciador-encomendas.firebaseapp.com',
  projectId: 'gerenciador-encomendas',
  storageBucket: 'gerenciador-encomendas.appspot.com',
  messagingSenderId: '679758674234',
  appId: '1:679758674234:web:b302b3413ecf142e383803',
  measurementId: 'G-4V6Y5FPDXB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if(docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email
      })
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    })
    alert('Registrado!')
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('O link para reset de senha foi enviado ao seu email!');
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

const logout = () => {
  signOut(auth);
}

export { 
  db,
  auth,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
 };
