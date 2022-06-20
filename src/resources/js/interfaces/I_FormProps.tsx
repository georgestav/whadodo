export interface I_RegisterForm {
    email: string,
    name: string,
    password: string,
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