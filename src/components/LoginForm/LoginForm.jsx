import { Form, Formik, useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/registration/registrationAP';
import FormInput from '../FormInput/FromInput';
import Container from '../Container/Container';
import { ReactComponent as ShowPassword } from '../../assets/icons/lock.svg';
import { ReactComponent as HidePassword } from '../../assets/icons/unlock.svg';
import { ReactComponent as RegistrationMainImage } from '../../assets/icons/phone-book-svgrepo-com.svg';
const initialValues = {
  email: '',
  password: '',
};

const myEmailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(myEmailRegex, {
      message: 'Your email must be valid',
      name: 'email',
      excludeEmptyString: true,
    })
    .min(5, 'Your email is too short')
    .max(254, 'Your email is too long')
    .lowercase()
    .required('Type your email please'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 symbols')
    .max(15, 'Password should be 15 symbols at max ')
    .required('Please write your password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(logIn(values));
      setSubmitting(false);
    },
  });
  const isValid = loginSchema.isValidSync(formik.values);

  const setSubmitButtonStyle = isValid => {
    if (!isValid) {
      return `${css.submitBtnHide}`;
    } else {
      return `${css.submitButtonShown}`;
    }
  };

  return (
    <Container>
      <div className={css.registrationPage}>
        <div className={css.mainImage}>
          <RegistrationMainImage />
        </div>

        <div className={css.registrationForm}>
          <h1 className={css.title}> Log In </h1>

          <Formik validationSchema={loginSchema}>
            <Form autoComplete="off">
              <div className={css.inputThumb}>
                <FormInput
                  ref={emailInput}
                  name="email"
                  placeholder="Email"
                  formik={formik}
                  type="text"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className={css.small}>{formik.errors.email}</small>
                ) : (
                  <small> </small>
                )}
              </div>
              <div className={css.inputThumb}>
                <div className={css.passGrupe}>
                  <FormInput
                    ref={passwordInput}
                    name="password"
                    placeholder="Password"
                    formik={formik}
                    type={showPassword ? 'text' : 'password'}
                    value={formik.values.password}
                    onChange={evt => {
                      formik.handleChange(evt);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <div className={css.iconContainer}>
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                      className={css.btn}
                    >
                      {showPassword ? <HidePassword /> : <ShowPassword />}
                    </button>
                  </div>

                  {formik.touched.password && formik.errors.password ? (
                    <small className={css.small}>
                      {formik.errors.password}
                    </small>
                  ) : (
                    <small className={css.small}> </small>
                  )}
                </div>
              </div>
              {isValid && (
                <button
                  type="submit"
                  className={setSubmitButtonStyle(isValid)}
                  onSubmit={formik.handleSubmit}
                >
                  GO!
                </button>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
