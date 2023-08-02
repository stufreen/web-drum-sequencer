import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import { Box, Text } from './design-system';

const HoverBox = Box.extend`
  transition: border-color 0.2s;

  &:hover {
    ${({ hoverEffect }) => (
    hoverEffect
      ? `border-color: ${theme.colors.gray};`
      : '')}
  }
`;

export const LabelBox = ({ label, children, hoverEffect }) => (
  <HoverBox
    display="flex"
    border="2px solid"
    borderColor="steel"
    borderRadius="0.5rem"
    p={2}
    position="relative"
    alignItems="center"
    hoverEffect={hoverEffect}
  >
    <Text
      position="absolute"
      left="0.5rem"
      top="-0.6em"
      color="gray"
      fontSize="0.6rem"
      fontWeight="600"
      bg="nearBlack"
      pl={1}
      pr={1}
      letterSpacing="0.1em"
      borderRadius="3px"
    >
      {label}
    </Text>
    {children}
  </HoverBox>
);

LabelBox.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hoverEffect: PropTypes.bool,
};

LabelBox.defaultProps = {
  hoverEffect: false,
};
