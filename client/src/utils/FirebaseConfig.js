import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDxv5nyPtOZNsTl7KUdO2Vkf9X_QGJlXpw",
    authDomain: "whatsapp-clone-393af.firebaseapp.com",
    projectId: "whatsapp-clone-393af",
    storageBucket: "whatsapp-clone-393af.appspot.com",
    messagingSenderId: "324909886914",
    appId: "1:324909886914:web:f183b508aea407c2b17a5b",
    measurementId: "G-31RFJTR9P3"
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app )