import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '../design-system';

export const ChannelLabel = ({ children }) => (
  <Box
    bg="darkGray"
    width="8rem"
    p={3}
    borderRadius="0.25rem"
    mr={4}
    display="flex"
    alignItems="center"
  >
    <Text color="nearWhite" fontSize={2} fontWeight="600" flex="1 1 auto">
      {children}
    </Text>
  </Box>
);

ChannelLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
