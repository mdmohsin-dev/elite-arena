import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider

    const [user, setUser] = useState(null)

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = ()=>{
       return signOut(auth)
    }

    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unSubscirbe
    }, [])

    const authInfo = {
        user, setUser,
        googleLogin,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;