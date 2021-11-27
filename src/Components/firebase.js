
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { useState, useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBMI9O-5DjyfRxlmcI1O6hD3KBxjKqgixU",
    authDomain: "banca-97bc5.firebaseapp.com",
    projectId: "banca-97bc5",
    storageBucket: "banca-97bc5.appspot.com",
    messagingSenderId: "300977074593",
    appId: "1:300977074593:web:d2e8ffb1986c2e70ed1be0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function Login(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function Logout(email,password){
    return signOut(auth);
}


export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [
    ])

    return currentUser;
}