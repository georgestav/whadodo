// @ts-nocheck
import React, { useCallback, useState } from 'react'
import { I_AuxProps } from '../../interfaces/I_AuxProps';

export const APIErrorContext = React.createContext({
    error: null,
    addError: (message: {}) => { },
    removeError: () => { }
});



export default function APIErrorProvider({ children }: I_AuxProps): JSX.Element {
    const [error, setError] = useState(null);

    const removeError = () => setError(null);
    const addError = (message: {}, status: {}) => setError({ message, status });

    const contextValue = {
        error,
        addError: useCallback((message: {}, status: {}) => addError(message, status), []),
        removeError: useCallback(() => removeError(), [])
    };

    return (
        <APIErrorContext.Provider value={contextValue}>
            {children}
        </APIErrorContext.Provider>
    );
}
