import React, { createContext } from 'react';
import propTypes from 'prop-types';
import {useTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";

export interface IAuth {
    user?: Meteor.User | null;
    roles?: Array<string>;
    isPending: boolean;
}

// @ts-ignore
const authContext = createContext();

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const auth: IAuth = {
        isPending: true
    };

    auth.user = useTracker(() => Meteor.user());
    auth.isPending = auth.user === undefined;

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: propTypes.element.isRequired
}

export { authContext as default };
