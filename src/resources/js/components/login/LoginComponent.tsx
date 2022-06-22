import {Button, Form} from "react-bootstrap";
import React from "react";

const LoginComponent = (props: any) =>{
    return(
        <form className="form__container" onSubmit={props.handleSubmit}>
        <h3>Login to Whadodo</h3>
        <div className="mb-3">
            <label className="form-label" htmlFor="formBasicEmail">Email address</label>
            <input className="form-control" id="formBasicEmail" type="email" placeholder="Enter email" autoComplete='email' value={props.emailInput} onChange={(e) => props.setEmailInput(e.target.value)}/>
            <small className="text-muted form-text">We are keeping your email safe!</small>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="formBasicPassword">Password</label>
            <input className="form-control" id="formBasicPassword" type="password" placeholder="Password" value={props.passwordInput} onChange={(e) => props.setPasswordInput(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
    </form>
    );
}
export default LoginComponent;
