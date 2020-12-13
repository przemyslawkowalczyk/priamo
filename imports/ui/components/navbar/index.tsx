import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const navbar = () => {
    const user = useTracker(() => Meteor.user());

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        user && (
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
    );
};

export default navbar;
