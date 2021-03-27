import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBubKyVcBYNsxjOQmnk7Slh3F4TvC4RGtw",
    authDomain: "amaz-on77.firebaseapp.com",
    projectId: "amaz-on77",
    storageBucket: "amaz-on77.appspot.com",
    messagingSenderId: "427734269380",
    appId: "1:427734269380:web:8c53790566b8212bbef891"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage }