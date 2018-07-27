import React from 'react';
import PropTypes from 'prop-types';

export const PageTitle = ({ children }) => (
  <h1 className="f1 fw3 mt0 sans-serif light-gray bb pb2">
    {children}
  </h1>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
