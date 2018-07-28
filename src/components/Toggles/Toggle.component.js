import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ss from 'styled-system';

const BeatButton = styled.button`
  ${ss.color}
  ${ss.space}
  ${ss.width}
  ${ss.height}
  ${ss.borders}
  ${ss.borderRadius}
`;

BeatButton.defaultProps = {
  border: 'none',
  fontWeight: 'bold',
  borderRadius: '1rem',
  height: '2rem',
  width: '2rem',
  variant: 'primary',
};

export const Toggle = ({ isActive, onClick, highlight }) => (
  isActive
    ? (
      <BeatButton
        type="button"
        bg="gold"
        onClick={onClick}
      />
    )
    : (
      <BeatButton
        type="button"
        bg="darkGray"
        onClick={onClick}
      />
    ));

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
};
