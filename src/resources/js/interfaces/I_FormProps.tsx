export interface  I_LoginForm {
    email: string,
    password: string,
}

export interface I_RegisterForm extends I_LoginForm{
    name: string,
    password_confirmation: string,
    terms_accepted: boolean
}

export interface I_ValidatedRegisterForm {
    email: string,
    name: string,
    password: string,
    password_confirmation: string,
    terms_accepted: string
}
