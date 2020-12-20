import * as _ from 'lodash';
import React from 'react';
import propTypes from 'prop-types';
import Form from "react-bootstrap/Form";

// @ts-ignore
const PriamoFormGroup = ({ formikProps, name, label, ...rest }) => {
    const { values, errors, handleChange, touched, handleBlur } = formikProps;

    const formControlProps: React.ComponentProps<any> = _.merge({
        name,
        value: values[name],
        onChange: handleChange,
        onBlur: handleBlur,
        isInvalid: errors[name] && touched[name]
    }, rest);

    return (
        <Form.Group>
            <Form.Label>
                {label}
            </Form.Label>
            <Form.Control {...formControlProps} />
            <Form.Control.Feedback type="invalid">
                {errors[name]}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

PriamoFormGroup.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    formikProps: propTypes.object.isRequired,
};

export default PriamoFormGroup;
