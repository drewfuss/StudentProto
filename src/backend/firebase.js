import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBreuIjIYw9GiGl8TWyzPKbOAjHN9AHbtI",
  authDomain: "studentdev-d593e.firebaseapp.com",
  databaseURL: "https://studentdev-d593e.firebaseio.com",
  projectId: "studentdev-d593e",
  storageBucket: "studentdev-d593e.appspot.com",
  messagingSenderId: "353254082587"
  };
firebase.initializeApp(config);

const settings = {/* your settings... */ timestampsInSnapshots: true};
let test = firebase.firestore();
test.settings(settings);


export const auth = firebase.auth();
export default firebase;
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export const facebookAuth = new firebase.auth.FacebookAuthProvider();
export const db = test;
