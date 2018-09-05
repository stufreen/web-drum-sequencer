import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '../design-system';

const HeaderText = Text.extend`
  text-transform: uppercase;
`;

export const ChannelHeaderLabel = ({ children, centerText, ...restProps }) => (
  <Box p={1} {...restProps}>
    <HeaderText
      color="white"
      fontWeight="700"
      fontSize="0.7rem"
      textAlign={centerText ? 'center' : 'left'}
    >
      {children}
    </HeaderText>
  </Box>
);

ChannelHeaderLabel.propTypes = {
  children: PropTypes.node.isRequired,
  centerText: PropTypes.bool,
};

ChannelHeaderLabel.defaultProps = {
  centerText: false,
};
