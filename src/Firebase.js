import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXaSR70T5SJhaIHCQfGD33fvV9cnYC9TE",
    authDomain: "todo-app-35ffb.firebaseapp.com",
    projectId: "todo-app-35ffb",
    storageBucket: "todo-app-35ffb.appspot.com",
    messagingSenderId: "40924135663",
    appId: "1:40924135663:web:a7023cd7802f75fba39b1a",
    measurementId: "G-RC2C0B4C42"
});

const db = firebaseApp.firestore();

export default db;