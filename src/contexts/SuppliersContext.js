import { createContext, useState } from "react";

export const SuppliersContext = createContext();

export const SuppliersProvider = ({ children }) => {
    const [contact, setContact] = useState({});
    return (
        <SuppliersContext.Provider value={{ contact, setContact }}>
            {children}
        </SuppliersContext.Provider>
    );
};