import React from "react";

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

export interface I_SuccessMessage {
    message?: {
        message?: string;
    },
    status?: string | undefined
}
