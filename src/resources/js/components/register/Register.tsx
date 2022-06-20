import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import '../../../scss/components/register/Register.scss';
import useAPIError from "../../common/hooks/useAPIError";
import { FormTools } from "../../utils/FormUtils";
import RegisterComponent from "./RegisterComponent";
// TODO success UI display
const Register = () => {
    const { addError } = useAPIError();
    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [passworndConfirmInput, setPassworndConfirmInput] = useState('');
    const [terms, setTerms] = useState(false);

    const handleTerms = (status: boolean) => {
        setTerms(status);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = {
            email: emailInput,
            name: nameInput,
            password: passwordInput,
            password_confirmation: passworndConfirmInput,
            terms_accepted: terms
        }
        try {
            const validated = await FormTools.validateRegForm(formData)
            axios.post('/register', validated).then((res) => {
                console.log(res);
            }).catch((onrejected) => {
                if (onrejected instanceof AxiosError) {
                    addError({ ...onrejected.response?.data });
                }
            });
        } catch (error) {
            if (error instanceof Error) {
                return addError({ message: error.message });
            }
        }
    }


    return (
        <RegisterComponent
            handleSubmit={handleSubmit}
            emailInput={emailInput}
            setEmailInput={setEmailInput}
            nameInput={nameInput}
            setNameInput={setNameInput}
            passwordInput={passwordInput}
            setPasswordInput={setPasswordInput}
            passworndConfirmInput={passworndConfirmInput}
            setPassworndConfirmInput={setPassworndConfirmInput}
            handleTerms={handleTerms} />
    );
};

export default Register;