import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import LoginPage from './components/loginPage';
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SignupPage from './components/signupPage';
// @ts-ignore
import Notifications from 'react-notify-toast';

export const App = () => {
    const user = useTracker(() => Meteor.user());

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Router>
                    <Switch>
                        {!user && (
                            <>
                                <Route path="/" exact component={LoginPage} />
                                <Route path="/signup" component={SignupPage} />
                            </>
                        )}
                    </Switch>
                </Router>
            </Container>
            <Notifications />
        </>
    );
}
