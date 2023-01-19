import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   const updateUser = (userName) => {
//     return updateProfile(auth.currentUser, {
//       displayName: userName,
//     });
//   };

  const userProfileUpdate = (userName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photo,
    });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("user sign out!");
      }
    });
    return () => unsubscribe();
  }, []);

  console.log("hhh", user);

  const info = { createUser, userProfileUpdate  };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
