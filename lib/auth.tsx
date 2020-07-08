import React, { useContext, createContext, useMemo, useState } from 'react';
import { Auth } from './service';

export const AuthContext = createContext({});

export const AuthProvider = ({ config, children }: any) => {
    const initialAuth = useMemo(() => new Auth(config), []);
    const [auth] = useState(initialAuth);

    return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
