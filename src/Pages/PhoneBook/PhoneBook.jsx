import React from 'react';
import {
  Section,
  Filter,
  Contacts,
  AddContactForm,
  Container,
} from '../../components/index';

const Phonebook = () => {
  return (
    <Container title="Phone book">
      <Section title="Add new contact">
        <AddContactForm />
      </Section>
      <Section title="Your contacts">
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
    </Container>
  );
};

export default Phonebook;
