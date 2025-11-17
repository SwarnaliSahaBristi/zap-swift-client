import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password);
  };

  const loginUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> {
        unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    signInGoogle,
    logOut
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
