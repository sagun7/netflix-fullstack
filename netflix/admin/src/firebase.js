

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA9UmgKAxN3TgRmeG61nFk91dS320OGw6g",
    authDomain: "netflix-78c7a.firebaseapp.com",
    projectId: "netflix-78c7a",
    storageBucket: "netflix-78c7a.appspot.com",
    messagingSenderId: "555416773626",
    appId: "1:555416773626:web:dfa106dce61979a506fa43"
  };


  firebase.initializeApp(firebaseConfig);

  const storage= firebase.storage();

  export default storage;