
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signUp with email and password with name and photourl
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    // signIn with google
    const googleLogin = () => {
        return signInWithPopup(googleProvider)
    }

    // signIn with gitHub
    const gitHubLogin = () => {
        return signInWithPopup(gitHubProvider)
    }

    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        login, 
        signUp,
        googleLogin,
        gitHubLogin,
        logOut,
        loading

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoading(false)
        })

        return () => unSubscribe();
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;