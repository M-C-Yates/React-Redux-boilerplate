import * as firebase from 'firebase';


const config = {
  apiKey: apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: "budgetapp-3b626.firebaseapp.com",
  databaseURL: "https://budgetapp-3b626.firebaseio.com",
  projectId: "budgetapp-3b626",
  storageBucket: "budgetapp-3b626.appspot.com",
  messagingSenderId: "628908091853"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



