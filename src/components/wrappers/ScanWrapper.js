import React from 'react'
import { ScanProvider } from '../../contexts/ScanContext';

const ScanWrapper = ({ children }) => {
    return (
        <ScanProvider>
            {children}
        </ScanProvider>
    );
};

export default ScanWrapper;