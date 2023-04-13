import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/registration/registrationSelectors';
import UserMenu from '../UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <footer>
        <nav className={css.navigation}>
          {isLoggedIn ? (
            <div>
              <UserMenu />
              <NavLink to="/phonebook" className={css.navlink}>
                <button className={css.btn}>Update!</button>
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/registration" className={css.navlink}>
                Registration
              </NavLink>
              <NavLink to="/logIn" className={css.navlink}>
                LogIn
              </NavLink>
            </>
          )}
        </nav>
      </footer>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
