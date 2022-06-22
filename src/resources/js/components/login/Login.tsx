import React, {useState} from "react"
import LoginComponent from "./LoginComponent";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAPIError from "../../common/hooks/useAPIError";
import useAPISuccess from "../../common/hooks/useAPISuccess";
import {FormTools} from "../../utils/FormUtils";
import axios, {AxiosError} from "axios";
import useAPIUserContext from "../../common/hooks/useAPIUserContext";
import {I_UserOptions} from "../../interfaces/I_UserContext";

const Login = () => {
    const { addError } = useAPIError();
    const { addSuccess } = useAPISuccess();
    const { options, addOptions } = useAPIUserContext();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');



    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const formData = {
            email: emailInput,
            password: passwordInput
        }
        try {
            const validated = await FormTools.validateLogForm(formData);

            axios.post('/login', validated).then(()=>{
                axios.post('/user').then((res)=>{
                addOptions(res.data);
                addSuccess({message: "Welcome Back " + res.data.name});
                setPasswordInput('');
                setEmailInput('');
                })
            }).catch((onrejected) => {
                if (onrejected instanceof AxiosError) {
                    addError({ ...onrejected.response?.data });
                }
            });
        } catch (error) {
            if (error instanceof Error) {
                return addError({message: error.message});
            }
        }
    }

    let defaultReturn = <>
        <LoginComponent handleSubmit={handleSubmit} emailInput={emailInput} setEmailInput={setEmailInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput}/>
        <div className="container w-25 p-2 mx-auto d-flex flex-column align-items-center justify-content-center">
            <div className="">You don't have an account yet?</div>
            <Link to={'/register'}>
                <Button variant="outline-dark" type="submit">
                    Register here
                </Button>
            </Link>
        </div>
    </>;

    if(options?.content?.id){
        defaultReturn = <div>You are already logged in</div> // TODO display something nicer
    }
    return (defaultReturn);
}
export default Login;
