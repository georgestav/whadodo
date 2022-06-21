import {Button, Form} from "react-bootstrap";
import React from "react";

const LoginComponent = (props: any) =>{
    return(
        <Form className="form__container" onSubmit={props.handleSubmit}>
        <h3>Login to Whadodo</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input className="form-control" type="email" placeholder="Enter email" value={props.emailInput} onChange={(e) => props.setEmailInput(e.target.value)}/>
            <Form.Text className="text-muted">
                We are keeping your email safe!
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input className="form-control" type="password" placeholder="Password" value={props.passwordInput} onChange={(e) => props.setPasswordInput(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
    );
}
export default LoginComponent;
