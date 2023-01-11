import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleInputChange = ({ target }) => {
    setValue(target.value);
    dispatch(changeFilter(target.value.toLowerCase()));
  };

  return (
    <input
      className={css.styledImput}
      placeholder="Find by name"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Filter;
