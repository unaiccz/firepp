import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../config/fb';
import { useState, useContext, createContext } from "react";
const UserContext = createContext();
export default function UserProvider({ children }) {
    const [user, setUser] = useState(false);
    useEffect(() => {

        onAuthStateChanged(auth,(userk) => {
            if (userk) {
                setUser(userk);
            } else {
                setUser(false);
            }
        
        });
    }, [ ]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    }
    export const useUser = () => useContext(UserContext)