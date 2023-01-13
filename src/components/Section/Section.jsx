import PropTypes from 'prop-types';
import React from 'react';
import css from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
