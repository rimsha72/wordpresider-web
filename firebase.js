
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1jskNdKAbeZ8VeHmfkVd1mvT1FuN7pHU",
    authDomain: "safe-rider-bus-9b6fc.firebaseapp.com",
    projectId: "safe-rider-bus-9b6fc",
    storageBucket: "safe-rider-bus-9b6fc.appspot.com",
    messagingSenderId: "611470107884",
    appId: "1:611470107884:web:8b9edc366f9f95ffaaf1c9",
    measurementId: "G-CW48CZGYPN"
  };

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
