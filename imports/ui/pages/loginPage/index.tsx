import React, { useState } from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import yup from 'yup';
import actions from '../../actions/loginPage';
import HelloCard from '../../components/helloCard';

interface IFormValues {
    username: string;
    password: string;
}

const initValues: IFormValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object({
    username: yup
        .string()
        .required('Required'),
    password: yup
        .string()
        .required('Required')
})

const login = () => {
    const [loginError, setLoginError] = useState('');

    const onSubmit = ({ username, password }: IFormValues): void => {
        actions.loginWithPassword(username, password, e => {
            e && setLoginError((e as { reason: string }).reason);
        });
    }

    return (
        <Row>
            <Col>
                <HelloCard />
            </Col>
            <Col>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initValues}
                    onSubmit={onSubmit}
                >
                    {({
                          handleChange,
                          handleSubmit,
                          isValid,
                          values,
                          errors
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            {
                                loginError && (
                                    <Alert
                                        variant="danger"
                                        onClose={() => setLoginError('')}
                                        dismissible
                                    >
                                        {loginError}
                                    </Alert>
                                )
                            }
                            <Form.Group>
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={!isValid}>
                                Login
                            </Button>
                            <Link to="/signup" className="ml-3">
                                Rejestracja
                            </Link>
                        </Form>
                    )}
                </Formik>
            </Col>
        </Row>
    );
};

export default login;
