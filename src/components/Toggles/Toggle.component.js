import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ss from 'styled-system';
import { Box } from '../design-system';
import theme from '../../styles/theme';

const gradient = `linear-gradient(180deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);`;

const BeatButton = styled.button`
  ${ss.color}
  ${ss.space}
  ${ss.width}
  ${ss.height}
  ${ss.borders}
  ${ss.borderRadius}
  padding: 0;
  outline: none;
  transition: background-color 0.1s;
  position: relative;
  background: ${({ isActive }) => (isActive
    ? gradient
    : theme.colors.darkGray)}

  &:focus {
    box-shadow: 0 0 5px 5px rgba(100, 180, 255, 0.5);
  }
`;

BeatButton.defaultProps = {
  border: 'none',
  borderRadius: '100%',
};

export const Toggle = ({ isActive, onClick, beat }) => (
  <BeatButton
    type="button"
    isActive={isActive}
    onClick={onClick}
    width={[18, 18, 18, 18, 18, 20, 24, 26]}
    height={[18, 18, 18, 18, 18, 20, 24, 26]}
    p={0}
  >
    <Box
      className="wds-beat-marker"
      data-beat={beat}
      data-active={isActive}
      position="absolute"
      bg="white"
      width="100%"
      height="100%"
      left={0}
      top={0}
      opacity={0}
      borderRadius="100%"
    />
  </BeatButton>
);

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  beat: PropTypes.number.isRequired,
};
