import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Link className="navbar-brand" to="/">Whadodo</Link>
                    <Link className="nav-link" to="/about-us">About us</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
