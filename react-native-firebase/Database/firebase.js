
import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9eTuvGh4r1x_wR1V2bg6VIhGB7lIHO1Y",
  authDomain: "app-mobile-dc982.firebaseapp.com",
  projectId: "app-mobile-dc982",
  storageBucket: "app-mobile-dc982.appspot.com",
  messagingSenderId: "508247317004",
  appId: "1:508247317004:web:9b9104266a5f3a6a436c29",
  measurementId: "G-X395G2QRHT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase,
    db
}