import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from './design-system';

export const ChannelLabel = ({ children }) => (
  <Box bg="darkGray" width="8rem" p={3} borderRadius="0.25rem" mr={4}>
    <Text color="white" fontSize={2} fontWeight="bold">
      {children}
    </Text>
  </Box>
);

ChannelLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
