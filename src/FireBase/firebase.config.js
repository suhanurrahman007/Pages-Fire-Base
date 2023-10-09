// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-jkgp1TQj42sIzhnoJbL6Vq6ibgH8vR4",
    authDomain: "page-da155.firebaseapp.com",
    projectId: "page-da155",
    storageBucket: "page-da155.appspot.com",
    messagingSenderId: "669247032819",
    appId: "1:669247032819:web:d13f05d16ee24519121686",
    measurementId: "G-15YZCCDX60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
