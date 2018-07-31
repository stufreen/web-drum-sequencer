import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';

const Progress = Box.extend.attrs({
  style: ({ progress }) => ({
    width: `${progress * 100}%`,
  }),
})``;

const Container = Box.extend`
  overflow: hidden;
`;

export const MarkerComponent = ({ progress, children }) => (
  <Container flex="1 1 auto" position="relative">
    <Progress progress={progress} height="100%" bg="white" opacity="0.2" position="absolute" />
    <Box position="absolute" display="flex" width="100%">
      {children}
    </Box>
  </Container>
);

MarkerComponent.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
