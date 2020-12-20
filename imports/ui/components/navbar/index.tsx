import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import { Meteor } from "meteor/meteor";
import ErrorBoundary from '../ErrorBoundary';
import authContext, { IAuth } from '../../contexts/authContext';

const navbar = () => {
    const auth = useContext(authContext) as IAuth;

    return (
        <ErrorBoundary>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            auth.user && (
                                <Nav.Item>
                                     <Button onClick={() => Meteor.logout()}>
                                         Logout
                                     </Button>
                                 </Nav.Item>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </ErrorBoundary>
    );
};

export default navbar;
