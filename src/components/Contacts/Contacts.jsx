import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/services/services';
import css from './Contacts.module.css';
import {
  getFilteredContacts,
  selectIsLoading,
} from '../../selectors/selectors';
function Contacts({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(getFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {children}
      <ul className={css.contactsList}>
        {[...filteredContacts].map(({ id, name, number }) => (
          <li key={id} className={css.contactsListItem}>
            {name} {number}{' '}
            <button
              className={css.delete_btn}
              data-id={id}
              onClick={() => dispatch(deleteContact(id))}
              disabled={isLoading}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
