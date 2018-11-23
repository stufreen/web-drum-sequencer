import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Logo } from './Logo.component';
import { Box } from './design-system';

const HeaderText = styled.h1`
  color: ${theme.colors.steel};
  font-size: 0.9em;
  font-weight: 500;
  margin-left: 1.5em;
  line-height: 1.2em;
  margin-top: 0.5em;
  max-width: 5em;
`;

export const Branding = () => (
  <Box mb={4} display="flex" alignItems="center">
    <Logo color="white" width="200px" />
    <HeaderText color="white">
      Web Drum Sequencer
    </HeaderText>
  </Box>
);
