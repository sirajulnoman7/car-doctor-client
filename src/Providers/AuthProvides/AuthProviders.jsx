import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut,
    }


    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            console.log(currentUser)
            const userEmail = currentUser?.email || user?.email
            const logUser = { email: userEmail }
            setUser(currentUser)
            if (currentUser) {

                axios.post('https://car-doctor-server-9an3kxpsn-sirajulnoman7s-projects.vercel.app/jwt', logUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }

            else {
                
                axios.post('https://car-doctor-server-9an3kxpsn-sirajulnoman7s-projects.vercel.app/logout', logUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }

        })
        return () => {
            unSubscriber()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;