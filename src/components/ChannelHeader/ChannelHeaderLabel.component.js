import React from 'react';
import { Box, Text } from '../design-system';

const HeaderText = Text.extend`
  text-transform: uppercase;
`;

export const ChannelHeaderLabel = ({ children, ...restProps }) => (
  <Box p={1} {...restProps}>
    <HeaderText
      color="nearBlack"
      fontWeight="700"
      fontSize="0.7rem"
    >
      {children}
    </HeaderText>
  </Box>
);
