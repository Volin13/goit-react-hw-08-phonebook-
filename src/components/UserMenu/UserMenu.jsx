import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/registration/registrationAP';
import { selectUserName } from '../../redux/registration/registrationSelectors';
import css from './UserMenu.module.css';
const Authorization = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div className={css.layOutformat}>
      <div className={css.greetings}>
        Hello, <span>{userName}!</span>
      </div>
      <button className={css.logOutBtn} onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default Authorization;
