import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import authContext, { IAuth } from '../../contexts/authContext';
import NavDropdownComponent from "./NavDropdownComponent";

import './navbar.less';

const navbar = () => {
    const auth = useContext(authContext) as IAuth;

    return (
        <ErrorBoundary>
            <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
                <Link to="/">
                    <Navbar.Brand>
                        Прямо
                    </Navbar.Brand>
                </Link>
                <NavDropdownComponent auth={auth} />
            </Navbar>
        </ErrorBoundary>
    );
};

export default navbar;
