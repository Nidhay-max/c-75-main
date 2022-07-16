import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5DtMhSyaGoN2GCqjqk3sZW9bQ-WKp0II",
  authDomain: "e-library-app-e11c3.firebaseapp.com",
  projectId: "e-library-app-e11c3",
  storageBucket: "e-library-app-e11c3.appspot.com",
  messagingSenderId: "46905574765",
  appId: "1:46905574765:web:f65530415a099222eec664",
  measurementId: "G-PPNPZE7Y53"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
