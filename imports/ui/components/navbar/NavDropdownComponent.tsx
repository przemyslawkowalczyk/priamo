import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Meteor} from "meteor/meteor";
import {NavLink} from "react-router-dom";
import UserAvatar from "/imports/ui/components/user/UserAvatar";

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
            <NavDropdown.Item>
                <NavLink to="/">
                    Login
                </NavLink>
            </NavDropdown.Item>
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
