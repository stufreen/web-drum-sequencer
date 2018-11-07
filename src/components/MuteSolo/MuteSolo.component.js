import React from 'react';
import { Box, Button } from '../design-system';
import theme from '../../styles/theme';

const MSButton = Button.extend`
  width: 0.8rem;
  height: 0.8rem;
  padding: 0;
  border-radius: 100%;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 0 1.5px ${theme.colors.gray};
  }
`;

export const MuteSoloComponent = ({ onPressMuted, onPressSolo, channel}) => (
  <Box
    justifyContent="space-around"
    width="1.2rem"
    display="flex"
    ml={2}
    height="100%"
    flexDirection="column"
  >
    <MSButton
      bg={channel.solo ? 'yellow' : 'yellow30'}
      onClick={onPressSolo}
    />
    <MSButton
      bg={channel.muted ? 'brightRed' : 'brightRed30'}
      onClick={onPressMuted}
    />
  </Box>
);
