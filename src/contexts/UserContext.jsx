import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const user = currentUser;
            setUser(user);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])


    const authInfo = { user, setUser, createAccount, login, googleLogin, logout, loading, emailVerification, forgetPassword }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;