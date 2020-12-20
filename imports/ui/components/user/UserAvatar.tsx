import React from "react";
import propTypes from 'prop-types';
import Image from "react-bootstrap/Image";
import {IUser} from "/types/common";

const UserAvatar = ({ user }: { user: IUser }) => {
    // @ts-ignore
    const base64Data = btoa(String.fromCharCode.apply(null, user?.profile?.avatar));
    const src = base64Data
        ? `data:image/png;base64,${base64Data}`
        : "/pictures/no-user.png";

    return (
        <Image
            className="user-avatar"
            roundedCircle
            src={src}
        />
    );
}

UserAvatar.propTypes = {
    user: propTypes.object
}

export default UserAvatar;
