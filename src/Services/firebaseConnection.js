import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebase from 'firebase/compat/app';

 

let firebaseConfig = {
    apiKey: "AIzaSyCxcy3Ymroluk2wnWt_epBkb_9PcbPor5o",
    authDomain: "frontend-v3.firebaseapp.com",
    projectId: "frontend-v3",
    storageBucket: "frontend-v3.appspot.com",
    messagingSenderId: "452688384316",
    appId: "1:452688384316:web:a2a334eacc89e970dcce39",
    measurementId: "G-MX868SY3N1"
  };
  if(!firebase.apps.length){ 
 firebase.initializeApp(firebaseConfig);
}
export default firebase;