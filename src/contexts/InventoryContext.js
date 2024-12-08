import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [product, setProduct] = useState({});
    return (
        <InventoryContext.Provider value={{ product, setProduct }}>
            {children}
        </InventoryContext.Provider>
    );
};