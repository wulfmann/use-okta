import React, { useContext, createContext, useMemo, useState } from 'react';
import { Auth } from './service';

export interface AuthContext {
    auth?: Auth;
}

export const AuthContext = createContext<AuthContext>({
    auth: undefined
});

export interface AuthProviderProps {
    config: OktaConfig;
    children: React.ReactNode;
}

export const AuthProvider = ({ config, children }: AuthProviderProps) => {
    const initialAuth = useMemo(() => new Auth(config), []);
    const [auth] = useState(initialAuth);

    return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
