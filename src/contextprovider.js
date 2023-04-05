import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";


export const Authcontext = createContext()
export const AuthContextProvider =({children})=>{
    const [currentUser,setCurrentUser] = useState({})
    useEffect(()=>{
        console.log(currentUser)
    },[currentUser])

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })
        return ()=>{
            unsub();
        }
    },[]);
    return(
        <Authcontext.Provider value={{currentUser}}>
            {children}
        </Authcontext.Provider>
    )
    
}