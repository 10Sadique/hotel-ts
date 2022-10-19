import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    getAuth,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

export interface AuthContextInterface {
    user: User | null;
    loading: boolean;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    setName: (name: string) => Promise<void> | undefined;
    logOut: () => Promise<void>;
}

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextInterface | null>(null);

interface Children {
    children: React.ReactNode;
}

const UserContext = ({ children }: Children) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const setName = (name: string) => {
        if (auth.currentUser !== null)
            return updateProfile(auth.currentUser, { displayName: name });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo: AuthContextInterface = {
        user,
        loading,
        createUser,
        signIn,
        setName,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
