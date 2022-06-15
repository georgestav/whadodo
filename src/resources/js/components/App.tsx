import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../scss/components/App.scss';

export interface IUser {
    name: string;
    age: number;
}
const App = () => {
    const [users, setUsers] = useState<IUser[]>([
        {
            name: "Bijayass",
            age: 13,
        },
        {
            name: "Rams",
            age: 25,
        },
    ]);

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <h1 className="header">Users list</h1>
            <ul>
                {users.map((user: IUser) => {
                    return (
                        <li key={user.name}>
                            {user.name} is {user.age} years old
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;