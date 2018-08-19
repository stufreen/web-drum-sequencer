import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';

export const ToggleGroup = ({ children }) => (
  <Box
    bg="black"
    p={[2, 2, 2, 2, 2, 3]}
    borderRadius="3em"
    flex="1 1 auto"
    mr={[2, 2, 2, 2, 2, 3]}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    {children}
  </Box>
);

ToggleGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
