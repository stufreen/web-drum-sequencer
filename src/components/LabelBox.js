import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from './design-system';

export const LabelBox = ({ label, children }) => (
  <Box
    display="flex"
    border="2px solid"
    borderColor="steel"
    borderRadius="0.5rem"
    p={3}
    pb={2}
    position="relative"
  >
    <Text
      position="absolute"
      left="1rem"
      top="-0.6em"
      color="gray"
      fontSize="0.6rem"
      fontWeight="600"
      bg="nearBlack"
      pl={1}
      pr={1}
      letterSpacing="0.1em"
    >
      {label}
    </Text>
    {children}
  </Box>
);

LabelBox.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
