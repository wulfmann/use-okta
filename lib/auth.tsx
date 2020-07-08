import React, { useContext, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
