import React, { useContext } from 'react';
import authContext,{ IAuth } from '../../contexts/authContext';
import MainUserPanel from "./MainUserPanel";

const UserAccountPage = () => {
    const auth = useContext(authContext) as IAuth;

    return (
        // @ts-ignore
        <MainUserPanel user={auth.user} />
    );
}

export default UserAccountPage;

