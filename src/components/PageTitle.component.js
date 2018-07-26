import React from 'react';
import PropTypes from 'prop-types';

export const PageTitle = ({ children }) => (
  <h1 className="f1 fw6 sans-serif mid-gray">
    {children}
  </h1>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
