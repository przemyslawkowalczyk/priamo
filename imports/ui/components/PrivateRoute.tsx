import _ from 'lodash';
import React, {useContext} from 'react';
import propTypes from 'prop-types';
import {  Redirect, Route } from 'react-router-dom';
import authContext, { IAuth } from '../contexts/authContext';

// @ts-ignore
const PrivateRoute = ({ children, ...rest }) => {
    const auth = useContext(authContext) as IAuth;

    const hasAllRequiredRoles = (): boolean => {
        return !!auth.user;

        // TODO
        // if (roles) return _(roles)
        //     .filter(({ role }) => (auth?.user?.roles || []).includes(role))
        //     .compact()
        //     .value()
        //     .length === roles.length;
    };

    if (auth.isPending) return null;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                hasAllRequiredRoles()
                    ? (children)
                    : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

// PrivateRoute.defaultProps = {
//     roles: []
// }

PrivateRoute.propTypes = {
    children: propTypes.element.isRequired,
    // roles: propTypes.arrayOf(propTypes.string)
}

export default PrivateRoute;
