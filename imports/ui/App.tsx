import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Hello } from './Hello';
import { Info } from './Info';
import LoginPage from './components/loginPage';
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/cjs/Container";
import Navbar from './components/navbar';

export const App = () => {
    const user = useTracker(() => Meteor.user());
    const logout = () => Meteor.logout();

    let content = <LoginPage />;

    if (user) {
        content = (
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

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                {content}
            </Container>
        </>
    )
}
