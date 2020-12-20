import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import authContext, { IAuth } from '../../contexts/authContext';
import NavDropdownComponent from "./NavDropdownComponent";

import './navbar.less';

const navbar = () => {
    const auth = useContext(authContext) as IAuth;

    return (
        <ErrorBoundary>
            <Navbar
                className="d-flex justify-content-between bg-white"
                expand="lg"
                bg="light"
            >
                <Link to="/">
                    <Navbar.Brand>
                        Прямо
                    </Navbar.Brand>
                </Link>
                <Row>
                    {
                        auth.user?.roles && (
                            <p
                                style={{ lineHeight: '2rem', marginBottom: '6px', marginTop: '8px' }}
                                className="badge badge-warning"
                            >
                                {auth.user?.roles?.isTeacher ? 'Nauczyciel' : "Uczeń"}
                            </p>
                        )
                    }
                    <NavDropdownComponent auth={auth} />
                </Row>
            </Navbar>
        </ErrorBoundary>
    );
};

export default navbar;
