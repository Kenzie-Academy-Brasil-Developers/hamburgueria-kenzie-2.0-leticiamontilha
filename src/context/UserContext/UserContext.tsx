import { createContext, useState } from "react";
// import api from "../../services/api";
import { iUserContextProps } from "./types";

export const UserContext = createContext({});

export const UserProvider = ({children}: iUserContextProps) => {
    const [ user, setUser ] = useState(null)

    // const userLogin = async (formData) => {

    //     try {
    //         const response = await api.post("/login ", formData);

    //     } catch (error) {
            
    //     }

    // }


    return (
        <UserContext.Provider value={{  }}>
            {children}
        </UserContext.Provider>
    )
}