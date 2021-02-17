import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AAAA60nM-cU:APA91bF5WN4DwFT2gVoreIKg4MeY_1gTilUOBsaSKvLXVGK3QX3hEfNRT_aNPzfEHju6EX98BVLLMGSR_8jFLTJiN2VyxJZPe0cW65Kpp2pHHk8YAbYW0tqHo3YlpTDl97w6OJ-WhNtl",
  authDomain: "dogposting-3a7fd.firebaseapp.com",
  projectId: "dogposting-3a7fd",
  storageBucket: "dogposting-3a7fd.appspot.com",
  messagingSenderId: "635941725426",
  appId: "1:635941725426:web:7e489c79b86a0de1629c6b",
  measurementId: "G-67SR8EPTV1"
});


const db = firebase.firestore();


export default {
  firebase, db
}