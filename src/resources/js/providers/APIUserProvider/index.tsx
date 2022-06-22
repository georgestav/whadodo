import React, {useCallback, useState} from "react";
import {I_AuxProps} from "../../interfaces/I_AuxProps";
import {I_UserContext, I_UserOptions} from "../../interfaces/I_UserContext";
// TODO types
export const APIUserContext = React.createContext<I_UserContext>({
    options: undefined,
    addOptions: (content:{}) => {},
    removeOptions: () => {}
});

export default function APIUserProvider({children}:I_AuxProps): JSX.Element {
    const [options, setOptions] = useState(undefined);

    // @ts-ignore
    const addOptions = (content: {}) => setOptions({content});
    const removeOptions = () => setOptions(undefined);

    const contextValue: I_UserContext = {
        options,
        addOptions: useCallback((content: I_UserOptions)=> addOptions(content), []) ,
        removeOptions: useCallback(()=> removeOptions(), [])
    }

    return (
        // @ts-ignore
        <APIUserContext.Provider value={contextValue}>{children}</APIUserContext.Provider>
    )
}
