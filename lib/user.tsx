import React, { useContext, createContext } from 'react';

export interface IUserContext {
    user?: UserInfo;
}

export const UserContext = createContext<IUserContext>({
    user: undefined
});

export const UserProvider = ({ children }: any) => {
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);
