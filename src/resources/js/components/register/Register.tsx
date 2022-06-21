import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import '../../../scss/components/register/Register.scss';
import useAPIError from "../../common/hooks/useAPIError";
import useAPISuccess from "../../common/hooks/useAPISuccess";
import { FormTools } from "../../utils/FormUtils";
import RegisterComponent from "./RegisterComponent";

const Register = () => {
    const { addError } = useAPIError();
    const { addSuccess } = useAPISuccess();
    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordConfirmInput, setPasswordConfirmInput] = useState('');
    const [terms, setTerms] = useState(false);

    const handleTerms = (status: boolean) => {
        setTerms(status);
    }

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const formData = {
            email: emailInput,
            name: nameInput,
            password: passwordInput,
            password_confirmation: passwordConfirmInput,
            terms_accepted: terms
        }
        try {
            const validated = await FormTools.validateRegForm(formData)
            axios.post('/register', validated).then(() => {
                addSuccess({ message: 'Registered Successfully ' + formData.name + ', Welcome Onboard!' })
                setEmailInput('');
                setNameInput('');
                setPasswordInput('');
                setPasswordConfirmInput('');
                setTerms(false);
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
            passworndConfirmInput={passwordConfirmInput}
            setPassworndConfirmInput={setPasswordConfirmInput}
            handleTerms={handleTerms} />
    );
};

export default Register;
