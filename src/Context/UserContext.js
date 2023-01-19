import React, { createContext } from "react";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const info = { name: "Mr pranto" };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
