import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(()=>{        
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(currentUser)
            setCurrentUser(user)
        })
        
        return unsubscribe
         // eslint-disable-next-line
    },[])

    return(
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}
