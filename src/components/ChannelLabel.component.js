import React from 'react';
import PropTypes from 'prop-types';

export const ChannelLabel = ({ children }) => (
  <div className="sans-serif white f3 fw4 h3 w4 pa2 bg-dark-gray flex aic justify-center items-center border-box">
    {children}
  </div>
);

ChannelLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
