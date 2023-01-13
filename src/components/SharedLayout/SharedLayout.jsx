import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/registration/registrationSelectors';
import UserMenu from '../UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: black;
    border: 2px solid white;
  }
`;

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.layoutBox}>
      <header>
        <nav>
          {isLoggedIn ? (
            <div>
              <UserMenu />
              <StyledLink
                style={{ textDecoration: 'none', color: 'inherit' }}
                to="/phonebook"
              >
                <button className={css.btn}>Update!</button>
              </StyledLink>
            </div>
          ) : (
            <>
              <StyledLink
                style={{ textDecoration: 'none', color: 'inherit' }}
                to="/registration"
              >
                <button className={css.btn}>Registration</button>
              </StyledLink>
              <StyledLink
                style={{ textDecoration: 'none', color: 'inherit' }}
                to="/"
              >
                <button className={css.btn}>LogIn</button>
              </StyledLink>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
