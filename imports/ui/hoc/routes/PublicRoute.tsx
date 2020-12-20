import React, {useContext} from 'react';
import propTypes from 'prop-types';
import {  Redirect, Route } from 'react-router-dom';
import authContext, { IAuth } from '../../contexts/authContext';

// @ts-ignore
const PublicRoute = ({ children, ...rest }) => {
    const auth = useContext(authContext) as IAuth;

    if (auth.isPending) return null;

    const isNotLogged: boolean = auth.user === null;

    return (
        <Route
            {...rest}
            render={() =>
                isNotLogged
                    ? children
                    : <Redirect to={{ pathname: '/home' }} />
            }
        />
    );
}

PublicRoute.propTypes = {
    children: propTypes.element.isRequired
}

export default PublicRoute;
