import {I_LoginForm, I_RegisterForm, I_ValidatedRegisterForm} from "../interfaces/I_FormProps";
import { DateUtils } from "./DateUtils";

export class FormTools {
    static async validateRegForm (formData: I_RegisterForm): Promise<I_ValidatedRegisterForm> {
        const validatedForm = {
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
            terms_accepted: ''
        }

        if (formData.email == undefined || formData.email == ''){
            throw new Error('Need to provide your email');
        } else {
            validatedForm.email = formData.email;
        }

        if (formData.name == undefined || formData.name == ''){
            throw new Error('Need to provide your name');
        } else {
            validatedForm.name = formData.name;
        }

        if (formData.password == undefined || formData.password == ''){
            throw new Error('Need to provide your password');
        } else {
            validatedForm.password = formData.password;
        }

        if (formData.password_confirmation == undefined || formData.password_confirmation == ''){
            throw new Error('Need to provide your password confirmation');
        } else {
            validatedForm.password_confirmation = formData.password_confirmation;
        }

        if (formData.terms_accepted == undefined || !formData.terms_accepted){
            throw new Error('Need to read and accept the terms and conditions');
        } else {
            validatedForm.terms_accepted = DateUtils.getDateNowString();
        }
        return validatedForm;
    }

    static async validateLogForm (formData: I_LoginForm): Promise<I_LoginForm> {
        const validatedForm = {
            email: '',
            password: ''
        }
        if (formData.email == undefined || formData.email == ''){
            throw new Error('Need to provide your email');
        } else {
            validatedForm.email = formData.email;
        }
        if (formData.password == undefined || formData.password == ''){
            throw new Error('Need to provide your password');
        } else {
            validatedForm.password = formData.password;
        }
        return validatedForm;
    }
}
