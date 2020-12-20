import React, { createContext } from 'react';
import propTypes from 'prop-types';
import {useTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import publications from "/publications";
import { IUser } from '/types/common';

export interface IAuth {
    user?: IUser | undefined | null;
    roles?: Array<string>;
    isPending: boolean;
}

// @ts-ignore
const authContext = createContext();

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const auth: IAuth = {
        isPending: true,
    };

    auth.user = useTracker(() => Meteor.user());

    auth.isPending = auth.user === undefined;

     useTracker(() => Meteor.subscribe(publications.user.profile, auth.user?._id, (user: Meteor.User) => {
        auth.user = user;
    }));

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
