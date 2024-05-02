import React, { createContext, useState, useContext } from "react";
import userData from "../data/users.json";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const authenticateUser = (email, password) => {

    const user = userData.userData?.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const generateAuthToken = () => {
    return currentUser ? `Id ${currentUser.user_id}` : null;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authenticateUser,
        generateAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
