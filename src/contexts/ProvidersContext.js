import { createContext, useState } from "react";

export const ProvidersContext = createContext();

export const ProvidersProvider = ({ children }) => {
    const [contact, setContact] = useState({});
    return (
        <ProvidersContext.Provider value={{ contact, setContact }}>
            {children}
        </ProvidersContext.Provider>
    );
};