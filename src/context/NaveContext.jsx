import { createContext, useContext, useState } from "react";

export const NaveContext = createContext();

export const useNave = () => {
    const context = useContext(NaveContext);
    if (!context) {
        console.error("Error creating Nave context");
        return;
    }
    return context;
}

export function NaveProvider({ children }) {
    const [nave, setNave] = useState({
        ref: null,
        body: null,
        animation: "Idle",
    })

    return (
        <NaveContext.Provider value={{ nave, setNave }}>
            {children}
        </NaveContext.Provider>
    )
}