import app from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyAbqYGsgnwJK4BPA60zvQcpHk7dtDNF8Wk',
  authDomain: 'cleveroad-a728a.firebaseapp.com',
  databaseURL: 'https://cleveroad-a728a.firebaseio.com',
  projectId: 'cleveroad-a728a',
  storageBucket: 'cleveroad-a728a.appspot.com',
  messagingSenderId: '1044473385570',
  appId: '1:1044473385570:web:967b25513e2aea4d68373b',
  measurementId: 'G-TY1E7L2SE7',
};

app.initializeApp(firebaseConfig);
let auth = app.auth();
let db = app.firestore();
let BackpackDB = db.collection('backpack');

const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export { BackpackDB, signUp, signIn };

export default app;
