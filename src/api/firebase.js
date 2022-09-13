import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAdaJIc2blrhcYdIaV1jFGKrz2PLaHSj8w",
    authDomain: "gb-react-d97dd.firebaseapp.com",
    databaseURL: "https://gb-react-d97dd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-d97dd",
    storageBucket: "gb-react-d97dd.appspot.com",
    messagingSenderId: "856804795796",
    appId: "1:856804795796:web:e256d3f7b224a16c115b81",
    measurementId: "G-29B8348ZX3"
};


export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const database = getDatabase(firebase);