import React from 'react'
import { Form, Button } from 'react-bootstrap'

const RegisterComponent = (props: any) => {
    return (
        <Form className="form__container" onSubmit={props.handleSubmit}>
            <h3>Register with Whadodo</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input className="form-control" type="email" placeholder="Enter email" value={props.emailInput} onChange={(e) => props.setEmailInput(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forUserName">
                <Form.Label>Name</Form.Label>
                <input className="form-control" type="text" placeholder="A name" value={props.nameInput} onChange={(e) => props.setNameInput(e.target.value)} />
                <Form.Text className="text-muted">
                    Will be used for display and communication can be changed later.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <input className="form-control" type="password" placeholder="Password" value={props.passwordInput} onChange={(e) => props.setPasswordInput(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Confirmation</Form.Label>
                <input className="form-control" type="password" placeholder="Password" value={props.passworndConfirmInput} onChange={(e) => props.setPassworndConfirmInput(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Just like everyone, Terms &amp; Conditions</Form.Label>
                <div className="form-check">
                    <input type="checkbox" id="formBasicCheckbox" className="form-check-input" onChange={(e: any) => props.handleTerms(e.target.checked)} />
                    <label title="" htmlFor="formBasicCheckbox" className="form-check-label">I Agree</label>
                </div>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default RegisterComponent

