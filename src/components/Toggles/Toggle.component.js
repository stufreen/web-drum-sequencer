import React from 'react';
import PropTypes from 'prop-types';

export const Toggle = ({ isActive, onClick, highlight }) => (
  isActive
    ? (
      <button
        className={`h3 ml1 bn flex-auto bg-light-red outline-transparent ${highlight ? 'highlight' : 'no-highlight'}`}
        type="button"
        onClick={onClick}
      />
    )
    : (
      <button
        className="h3 ml1 bn flex-auto bg-near-white outline-transparent"
        type="button"
        onClick={onClick}
      />
    ));

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
};
