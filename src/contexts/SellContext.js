import { createContext, useState, useContext } from "react";

export const SellContext = createContext();

export const SellProvider = ({ children }) => {
    const [barcodes, setBarcodes] = useState([]);
    return (
        <SellContext.Provider value={{ barcodes, setBarcodes }}>
            {children}
        </SellContext.Provider>
    );
};