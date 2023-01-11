import {
  Section,
  Filter,
  Contacts,
  AddContactForm,
  Container,
} from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchContacts } from '../redux/services/services';
import { selectIsLoading } from '../selectors/selectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const onSucsessMessage = message => toast.success(message);
export const onErrorMessage = message => toast.error(message);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container title="Phone book">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading && <h2 style={{ margin: '0 auto' }}>Loading...</h2>}
      <Section title="Add new contact" variant="h3">
        <AddContactForm />
      </Section>
      <Section title="Your contacts" variant="h3">
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
    </Container>
  );
};
export default App;
