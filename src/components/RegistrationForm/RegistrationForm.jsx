import { Form, Formik, useFormik, Field } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/registration/registrationAP';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name has to be more then 2 symbols')
    .max(25, 'Name has to be less then 25 symbols')
    .required('Please type your name'),
  email: yup
    .string()
    .email('Wrong e-mail format')
    .required('Please type your e-mail'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 symbols')
    .max(15, 'Password should be 15 symbols at max ')
    .required('Please write your password'),
  confirm: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password'), null], 'Wrong password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(register(values));
      setSubmitting(false);
    },
  });

  return (
    <div>
      <Formik validationSchema={schema}>
        <Form autoComplete="off">
          <Field
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name}
            lable={(formik.touched.name && formik.errors.name) || ' '}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <Field
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            lable={(formik.touched.email && formik.errors.email) || ' '}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <Field
            id="password"
            name="password"
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={evt => {
              formik.handleChange(evt);
            }}
          />
          <button type="button" onClick={() => setShowPassword(show => !show)}>
            Show password
          </button>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <Field
            name="confirm"
            label="Password confirmation"
            type={showConfirm ? 'text' : 'password'}
            value={formik.values.confirm}
            onChange={evt => {
              formik.handleChange(evt);
            }}
          />

          <button onClick={() => setShowConfirm(show => !show)}>
            Show password
          </button>
          {formik.touched.confirm && formik.errors.confirm ? (
            <div>{formik.errors.confirm}</div>
          ) : null}
          <button type="submit" onSubmit={formik.handleSubmit}>
            GO!
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
