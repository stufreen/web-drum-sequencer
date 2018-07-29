import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';

export const MarkerComponent = ({ progress, children }) => (
  <Box width={1} flex="1 1 auto" display="flex" position="relative">
    <Box width={progress} height="100%" bg="white" opacity="0.2" position="absolute" />
    <Box position="absolute" display="flex" width="100%">
      {children}
    </Box>
  </Box>
);

MarkerComponent.propTypes = {
  progress: PropTypes.number.isRequired,
};
