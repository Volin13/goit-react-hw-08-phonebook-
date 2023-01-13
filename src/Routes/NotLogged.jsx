import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/registration/registrationSelectors';

const NotLogged = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
};

export default NotLogged;
