import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyD0HbJTtL1jQ6gfWXkXVP0BSXeuFIAHhC8",
    authDomain: "medly-dashboard.firebaseapp.com",
    databaseURL: "https://medly-dashboard.firebaseio.com",
    projectId: "medly-dashboard",
    storageBucket: "medly-dashboard.appspot.com",
    messagingSenderId: "794489540788"
};
const firebaseConnect = firebase.initializeApp(config);
export default firebaseConnect;