import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB6hygc7lJf3iK7H2ZoJgiPFcVzOd1B7I8",
  authDomain: "dogposting-3a7fd.firebaseapp.com",
  projectId: "dogposting-3a7fd",
  storageBucket: "dogposting-3a7fd.appspot.com",
  messagingSenderId: "1010555484613",
  appId: "1:1010555484613:web:03b78352e0a508d57d33ac",
  measurementId: "G-RGVGX67D61"
});


const db = firebase.firestore();


export default {
  firebase, db
}