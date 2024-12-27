import React, { useState } from 'react'
import { createContext } from 'react';
import { Children } from '../types/General';

type ScanContextType = {
    hasScanned: boolean;
    setHasScanned: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ScanContext = createContext<ScanContextType>({
    hasScanned: false,
    setHasScanned: () => { },
});

export const ScanProvider: React.FC<Children> = ({ children }) => {
    const [hasScanned, setHasScanned] = useState(false);

    return (
        <ScanContext.Provider value={{ hasScanned, setHasScanned }}>
            {children}
        </ScanContext.Provider>
    );
};