import React, { useContext, createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);
