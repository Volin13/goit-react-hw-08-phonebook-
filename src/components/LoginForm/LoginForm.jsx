import { Form, Formik, useFormik, Field } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/registration/registrationAP';
const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Wrong e-mail format')
    .required('Please write your e-mail'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 symbols')
    .max(15, 'Password should be 15 symbols at max ')
    .required('Please write your password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(logIn(values));
      setSubmitting(false);
    },
  });

  return (
    <div>
      <Formik validationSchema={schema}>
        <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Field
            id="email"
            name="email"
            placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <Field
            id="password"
            name="password"
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={evt => {
              formik.handleChange(evt);
            }}
          />
          <button onClick={() => setShowPassword(show => !show)}>
            Show password
          </button>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type="submit">GO!</button>
        </Form>
      </Formik>
    </div>
  );
};
