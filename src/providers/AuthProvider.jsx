import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    

   

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail=currentUser?.email || user?.email
            const loggedUser={email:userEmail}
            setUser(currentUser)
            console.log('currentUser',currentUser)
            setLoading(false)
            if (currentUser) {
                
                axios.post('http://localhost:5000/jwt',loggedUser ,{withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        createUser, 
        loading,
        signInWithGoogle,
        logOut,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;