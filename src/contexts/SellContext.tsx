import React, { createContext, useState, useContext } from "react";
import { Children } from "../types/General";


type SellContextType = {
    barcodes: any[];
    setBarcodes: React.Dispatch<React.SetStateAction<any[]>>;
};

export const SellContext = createContext<SellContextType>({
    barcodes: [],
    setBarcodes: () => { },
});

export const SellProvider: React.FC<Children> = ({ children }) => {
    const [barcodes, setBarcodes] = useState<any[]>([]);
    return (
        <SellContext.Provider value={{ barcodes, setBarcodes }}>
            {children}
        </SellContext.Provider>
    );
};