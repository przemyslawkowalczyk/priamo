import _ from 'lodash';
import React, {useContext} from 'react';
import propTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import authContext, { IAuth } from '../../contexts/authContext';

// @ts-ignore
const PrivateRoute = ({ children, role, ...rest }) => {
    const auth = useContext(authContext) as IAuth;

    const hasAllRequiredRoles = (): boolean => {
        if (role) return !!auth.user && _.get(auth.user, `roles.is${_.capitalize(role)}`, false);
        return !!auth.user;
    };

    if (auth.isPending) return null;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                hasAllRequiredRoles()
                    ? children
                    : <Redirect to={{pathname: "/", state: { from: location } }} />
            }
        />
    );
}

// PrivateRoute.defaultProps = {
//     roles: []
// }

PrivateRoute.propTypes = {
    children: propTypes.element.isRequired,
    roles: propTypes.arrayOf(['teacher', 'student'])
}

export default PrivateRoute;
