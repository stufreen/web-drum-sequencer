import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ss from 'styled-system';

const bgColor = (isActive, highlight) => {
  if (isActive && highlight) {
    return 'paleMelon';
  } if (isActive) {
    return 'melon';
  }
  return 'nearBlack';
};

const BeatButton = styled.button`
  ${ss.color}
  ${ss.space}
  ${ss.width}
  ${ss.height}
  ${ss.borders}
  ${ss.borderRadius}
  outline: none;
  transition: background-color 0.1s;
`;

BeatButton.defaultProps = {
  border: 'none',
  borderRadius: '0.75rem',
  height: '1.5rem',
  width: '1.5rem',
};

export const Toggle = ({ isActive, onClick, highlight }) => (
  <BeatButton
    type="button"
    onClick={onClick}
    bg={bgColor(isActive, highlight)}
  />
);

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
};
