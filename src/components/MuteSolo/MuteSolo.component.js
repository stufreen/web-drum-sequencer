import React from 'react';
import { Box, Button } from '../design-system';

export const MuteSoloComponent = ({ onPressMuted, onPressSolo, channel}) => (
  <Box>
    <Button w="1rem" h="2rem" bg={channel.solo ? 'black' : 'yellow'} onClick={onPressSolo} />
    <Button w="1rem" h="2rem" bg={channel.muted ? 'black' : 'red'} onClick={onPressMuted} />
  </Box>
);
