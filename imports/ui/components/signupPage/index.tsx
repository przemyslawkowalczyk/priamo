import React from "react";
import Col from "react-bootstrap/cjs/Col";
import HelloCard from '../helloCard';
import Row from "react-bootstrap/Row";
import { withRouter } from 'react-router-dom'
import { Formik, FormikProps, FormikValues } from "formik";
import yup from 'yup';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IFormValues } from '/types/common';
import methods from '/methods';
import { Meteor } from 'meteor/meteor';
import PriamoFormGroup from '../form/PriamoFormGroup';
import errorHandler from '/imports/ui/utils/errorHandler';
// @ts-ignore
import { notify } from 'react-notify-toast';

const initValues: IFormValues = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
};

const validationSchema = yup.object({
    email: yup
        .string()
        .email('nie poprawny email')
        .required('obowiązkowe'),
    username: yup
        .string()
        .required('obowiązkowe'),
    password: yup
        .string()
        .min(8, 'conajmniej 8 znaków')
        .required('obowiązkowe'),
    confirmPassword: yup
        .string()
        .min(8, 'conajmniej 8 znaków')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('obowiązkowe'),
    acceptTerms: yup
        .boolean()
        .required()
        .isTrue('Required')
});

// @ts-ignore
const signupPage = ({ history }) => {
    const onSubmit = (val: IFormValues): void => {
        Meteor.call(methods.accounts.create, val, (err: any) => {
            errorHandler(err);
            if (!err) {
                notify.show('Account created', 'success');
                history.push('/');
            }
        });
    };

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
                    {(props: FormikProps<FormikValues>) => {
                        const { handleSubmit, isValid, dirty, values, handleChange, handleBlur, errors, touched } = props;

                        return (
                            <Form noValidate onSubmit={handleSubmit}>
                                <PriamoFormGroup
                                    name="email"
                                    formikProps={props}
                                    label="email"
                                    type="text"
                                />
                                <PriamoFormGroup
                                    name="username"
                                    formikProps={props}
                                    label="username"
                                    type="text"
                                />
                                <PriamoFormGroup
                                    name="password"
                                    formikProps={props}
                                    label="password"
                                    type="password"
                                />
                                <PriamoFormGroup
                                    name="confirmPassword"
                                    formikProps={props}
                                    label="confirmPassword"
                                    type="password"
                                />
                                <Form.Group controlId="acceptTerms">
                                    <Form.Check
                                        label="Accept terms"
                                        name="acceptTerms"
                                        type="checkbox"
                                        value={values.acceptTerms}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={errors.acceptTerms}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.acceptTerms}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button
                                    disabled={!isValid || !dirty}
                                    variant="primary"
                                    type="submit"
                                >
                                    Rejestruj
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </Col>
        </Row>
    )
};

export default withRouter(signupPage);
