import firebase from 'firebase';


let firebaseConfig = {
    apiKey: "AIzaSyC6nwlQlCGOfkSKfpzyFJ2reaM1rdee80g",
    authDomain: "react-deploy-a1bf9.firebaseapp.com",
    databaseURL: "https://react-deploy-a1bf9.firebaseio.com",
    projectId: "react-deploy-a1bf9",
    storageBucket: "react-deploy-a1bf9.appspot.com",
    messagingSenderId: "202110022830",
    appId: "1:202110022830:web:503d35fd492c774dd4693f"
  };

let fire = firebase.initializeApp(firebaseConfig);
export default fire;