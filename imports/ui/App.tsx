import React from 'react';
import LoginPage from './pages/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "/imports/ui/contexts/authContext";

// PAGES
import UserAccountPage from "/imports/ui/pages/userAccountPage";
import SignupPage from './pages/signupPage';
import PageNotFound from '/imports/ui/pages/errors/PageNotFound';

// COMPONENTS
// @ts-ignore
import Notifications from 'react-notify-toast';
import Navbar from './components/navbar';
import PrivateRoute from "/imports/ui/hoc/routes/PrivateRoute";
import PublicRoute from "/imports/ui/hoc/routes/PublicRoute";

export const App = () => (
    <AuthProvider>
        <Router>
            <Navbar />
            <Container className="mt-5">
                <Switch>
                    <PublicRoute path="/" exact>
                        <LoginPage />
                    </PublicRoute>
                    <PublicRoute path="/signup">
                        <SignupPage />
                    </PublicRoute>
                    <PrivateRoute path='/home'>
                        <p>home</p>
                    </PrivateRoute>
                    <PrivateRoute path="/account-settings">
                        <UserAccountPage />
                    </PrivateRoute>
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Container>
            <Notifications />
        </Router>
    </AuthProvider>
)
