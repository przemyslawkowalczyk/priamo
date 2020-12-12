import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Hello } from './Hello';
import { Info } from './Info';
import { LoginForm } from './LoginForm';
import { Meteor } from 'meteor/meteor';

export const App = () => {
    const user = useTracker(() => Meteor.user());
    const logout = () => Meteor.logout();

    if (user) {
        return (
            <div>
                <button className="user" onClick={logout}>
                    {user.username} logout
                </button>
                <h1>Welcome to Meteor!</h1>
                <Hello />
                <Info />
            </div>
        );
    }

    return <LoginForm />

}
