import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import yup from 'yup';

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
        .min(8, 'At least 8 znaków')
})

const login = () => {
    const [loginError, setLoginError] = useState('');

    const onSubmit = ({ username, password }: IFormValues): void => {
        Meteor.loginWithPassword(username, password, e => {
            setLoginError((e as { reason: string }).reason);
        });
    }

    return (
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
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!isValid}>
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default login;
