import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';

const Container = Box.extend`
  overflow: hidden;
`;

export const MarkerComponent = ({ progress, children }) => (
  <Container flex="1 1 auto" position="relative">
    <Box
      style={{ width: `${progress * 100}%` }}
      height="100%"
      bg="white"
      opacity="0.2"
      position="absolute"
    />
    <Box position="absolute" display="flex" width="100%">
      {children}
    </Box>
  </Container>
);

MarkerComponent.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
