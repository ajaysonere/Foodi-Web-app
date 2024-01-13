import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create new user with email and password
  const createUser = (email, password) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  // sing up with gmail
  const signUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  
  // Login with email and password
  
  const login = (email , password) => {
     return signInWithEmailAndPassword(auth , email , password)
  }
  
  // logout
  const logOut = () => {
      signOut(auth);
  }
  
  // update profile
  
  const updateUserProfile = ({name , photoURL}) => {
     return updateProfile(auth.currentUser , {
         displayName: name , photoURL: photoURL,
     });
  };
  
  // manage user
  
  useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (createUser) {
             setUser(currentUser);
             setLoading(false);
          } 
     });
     return () => {
        return unSubscribe();
     }
  } , [])
  

  const authInfo = {
    user,
    createUser,
    signUpWithGoogle,
    login,
    logOut,
    updateUserProfile,
    loading
  };

  return (
    <>
      {" "}
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </>
  );
};

export default AuthProvider;
