import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbqYGsgnwJK4BPA60zvQcpHk7dtDNF8Wk',
  authDomain: 'cleveroad-a728a.firebaseapp.com',
  databaseURL: 'https://cleveroad-a728a.firebaseio.com',
  projectId: 'cleveroad-a728a',
  storageBucket: 'cleveroad-a728a.appspot.com',
  messagingSenderId: '1044473385570',
  appId: '1:1044473385570:web:967b25513e2aea4d68373b',
  measurementId: 'G-TY1E7L2SE7',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
