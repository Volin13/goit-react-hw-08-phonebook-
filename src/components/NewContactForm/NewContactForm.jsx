import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/services/services';
import { Field, Form, Formik, useFormik } from 'formik';
import { getContacts, selectIsLoading } from '../../selectors/selectors';
import * as yup from 'yup';
import onErrorMessage from '../NewContactForm/NewContactForm.styled';
import Wrapper from '../Wrapper/Wrapper.styled';
const schema = yup.object().shape({
  name: yup.string().min(3, 'Its too short.').required('Type your name please'),
  number: yup
    .string()
    .matches(
      /[0-9]{3}[ .-][0-9]{2}[ .-][0-9]{2}/,
      'Invalid format. It should be 999-99-99'
    )
    .max(9, 'Invalid format. It should be 999-99-99')
    .required('Please add a phone number'),
});

const AddContactForm = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: ({ name, number }, { setSubmitting, resetForm }) => {
      if (
        contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        onErrorMessage('This contact already exists');
        setSubmitting(false);
        return;
      }
      resetForm();
      dispatch(addContact({ name, number }));
      setSubmitting(false);
    },
    validateOnBlur: true,
  });
  return (
    <div>
      <Formik validationSchema={schema}>
        <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Wrapper>
            <Field
              placeholder="Name"
              className="inputStyled"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </Wrapper>
          <Wrapper>
            <Field
              placeholder="Phone number"
              className="inputStyled"
              type="text"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
            {formik.touched.number && formik.errors.number ? (
              <div>{formik.errors.number}</div>
            ) : null}
          </Wrapper>
          <Wrapper>
            <button className="styledBtn" type="submit" disabled={isLoading}>
              Add to phone book
            </button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContactForm;
