// @ts-nocheck
import React, { useCallback, useState } from 'react'
import {I_AuxProps, I_SuccessContext} from '../../interfaces/I_AuxProps';

export const APISuccessContext = React.createContext<I_SuccessContext>({
    success: null,
    addSuccess: (message: {}) => { },
    removeSuccess: () => { }
});



export default function APISuccessProvider({ children }: I_AuxProps): JSX.Element {
    const [success, setSuccess] = useState(null);

    const removeSuccess = () => setSuccess(null);
    const addSuccess = (message: {}, status: {}) => setSuccess({ message, status });

    const contextValue = {
        success,
        addSuccess: useCallback((message: {}, status: {}) => addSuccess(message, status), []),
        removeSuccess: useCallback(() => removeSuccess(), [])
    };

    return (
        <APISuccessContext.Provider value={contextValue}>
            {children}
        </APISuccessContext.Provider>
    );
}
