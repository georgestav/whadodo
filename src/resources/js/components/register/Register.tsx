import axios from "axios";
import React, { useState } from "react";
import '../../../scss/components/register/Register.scss';
import { DateUtils } from "../../utils/DateUtils";
import RegisterComponent from "./RegisterComponent";

const Register = () => {
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
        if (!terms) return alert('need to accept')
        const formData = {
            email: emailInput,
            name: nameInput,
            password: passwordInput,
            password_confirmation: passworndConfirmInput,
            terms_accepted: DateUtils.getDateNowString()
        }
        try {
            axios.post('/register', formData);
        } catch (error) {
            console.error(error);
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