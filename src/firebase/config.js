
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB_TzLl9tdGPdbhots-Ea9rPKX17wIJDKs",
  authDomain: "ninja-firegram-864cf.firebaseapp.com",
  projectId: "ninja-firegram-864cf",
  storageBucket: "ninja-firegram-864cf.appspot.com",
  messagingSenderId: "599178738038",
  appId: "1:599178738038:web:fa3ecf8d1a32c192d8a257"

  };
firebase.initializeApp(firebaseConfig);
const projectStorage=firebase.storage();
const projectFirestore=firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export  {projectStorage,projectFirestore,timestamp};

  
