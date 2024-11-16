import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }){
    const [name, setName] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return <UserContext.Provider value={{ name, setName, currentQuestion, setCurrentQuestion }}>{children}</UserContext.Provider>

}