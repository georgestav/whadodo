import React from "react";
import { Form, Button } from "react-bootstrap";
import '../../../scss/components/register/Register.scss';

/* 
name, email, password
*/

const Register = () => {
    return (
        <Form className="form__container">
            <h3>Register with Whadodo</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="A name" />
                <Form.Text className="text-muted">
                    Will be used for display and communication can be changed later.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Just like everyone, Terms &amp; Conditions</Form.Label>
                <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
};

export default Register;