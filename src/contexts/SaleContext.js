import { createContext, useState, useContext } from "react";

const SaleContext = createContext();

export const SaleProvider = ({ children }) => {
    const [barcodes, setBarcodes] = useState([]);
    return (
        <SaleContext.Provider value={{ barcodes, setBarcodes }}>
            {children}
        </SaleContext.Provider>
    );
};

export const useSale = () => useContext(SaleContext);