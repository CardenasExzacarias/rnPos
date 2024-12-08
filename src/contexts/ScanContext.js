import React, { useState } from 'react'
import { createContext } from 'react';

export const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
    const [hasScanned, setHasScanned] = useState(false);

    return (
        <ScanContext.Provider value={{ hasScanned, setHasScanned }}>
            {children}
        </ScanContext.Provider>
    );
};