import React from "react";
import {I_UserOptions} from "./I_UserContext";

export type T_Nullable<T> = T | null;

export interface I_AuxProps {
    children: React.ReactNode
}

// TODO fix I_ErrorMessage to iterate on errors
export interface I_ErrorMessage {
    message?: {
        message?: string;
        errors?: { [name: string]: Array<string> }
    },
    status?: string | undefined
}
export interface I_ErrorContext {
    error?: I_ErrorMessage,
    addError: (content: any) => void,
    removeError: () => void
}

export interface I_SuccessMessage {
    message?: {
        message?: string;
    },
    status?: string | undefined
}

export interface I_SuccessContext {
    success?: I_SuccessMessage,
    addSuccess: (content: any) => void,
    removeSuccess: () => void
}
