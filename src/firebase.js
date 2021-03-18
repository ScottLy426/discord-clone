import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBxya_Ad61A1niWJobgCccY22H9_3ymkM",
  authDomain: "discord-clone-11a11.firebaseapp.com",
  projectId: "discord-clone-11a11",
  storageBucket: "discord-clone-11a11.appspot.com",
  messagingSenderId: "762848095174",
  appId: "1:762848095174:web:58001a6ae0d076832c20c7",
  measurementId: "G-6SP4MY2K2R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
