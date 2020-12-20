import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Meteor} from "meteor/meteor";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import UserAvatar from "/imports/ui/components/user/UserAvatar";
// @ts-ignore
import { LinkContainer } from 'react-router-bootstrap';

// @ts-ignore
const NavDropdownComponent = ({ auth }) => {
    const userList = (
        <>
            <NavDropdown.Item>
                {
                    auth.user?.roles?.isTeacher && (
                        <NavLink to="/class-management">
                            zarządaj klasami
                        </NavLink>
                    )
                }
            </NavDropdown.Item>
            <NavDropdown.Item>
                <NavLink to="/account-settings">
                    ustawienia konta
                </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => Meteor.logout()}>
                Logout
            </NavDropdown.Item>
        </>
    )

    const nonUserList = (
        <>
            <NavDropdown.Divider />
            <LinkContainer to="/">
                <Button variant="link">
                    Login
                </Button>
            </LinkContainer>
        </>
    );

    return (
        <NavDropdown
            title={<UserAvatar user={auth.user}/>}
            id="navbar-dropdown-toggle"
        >
            {auth.user ? userList : nonUserList }
        </NavDropdown>
    );
}

export default NavDropdownComponent;
