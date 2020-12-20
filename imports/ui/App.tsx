import React from 'react';
import LoginPage from './pages/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SignupPage from './pages/signupPage';
// @ts-ignore
import Notifications from 'react-notify-toast';
import PageNotFound from '/imports/ui/pages/errors/PageNotFound';
import { AuthProvider } from "/imports/ui/contexts/authContext";
import PrivateRoute from "/imports/ui/components/PrivateRoute";

export const App = () => (
    <AuthProvider>
        <Router>
            <Navbar />
            <Container className="mt-5">
                <Switch>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <PrivateRoute path='/home'><p>home</p></PrivateRoute>
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Container>
            <Notifications />
        </Router>
    </AuthProvider>
)
