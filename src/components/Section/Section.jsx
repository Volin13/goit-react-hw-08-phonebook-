import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Section;
