import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// const config = {
//   apiKey: "AIzaSyAapA5P8gWC83aHK26xgDDMzIBC4dw914w",
//   authDomain: "expensify-a13e6.firebaseapp.com",
//   databaseURL: "https://expensify-a13e6.firebaseio.com",
//   projectId: "expensify-a13e6",
//   storageBucket: "expensify-a13e6.appspot.com",
//   messagingSenderId: "124728096317"
// };