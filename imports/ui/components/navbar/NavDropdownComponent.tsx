import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import {Meteor} from "meteor/meteor";
import {Link} from "react-router-dom";

// @ts-ignore
const NavDropdownComponent = ({ auth }) => {
    const picSrc: string = auth.user?.avatarSrc || "/pictures/no-user.png";

    return (
        <NavDropdown
            title={<Image roundedCircle src={picSrc} />}
            id="navbar-dropdown-toggle"
        >
            <NavDropdown.Divider />
            {
                auth.user
                    ? <NavDropdown.Item onClick={() => Meteor.logout()}>Logout</NavDropdown.Item>
                    : <Link to="/"><NavDropdown.Item>Login</NavDropdown.Item></Link>
            }
        </NavDropdown>
    );
}

export default NavDropdownComponent;
