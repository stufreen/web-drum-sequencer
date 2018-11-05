import React from 'react';
import { Box, Button } from '../design-system';

export const MuteSoloComponent = ({ onPressMuted, onPressSolo, channel}) => (
  <Box
    justifyContent="space-around"
    width="1.2rem"
    display="flex"
    ml={2}
    height="100%"
    flexDirection="column"
  >
    <Button
      width="0.8rem"
      height="0.8rem"
      mb={1}
      p={0}
      bg="yellow"
      borderRadius="50%"
      onClick={onPressSolo}
      color="white"
      fontSize={0}
      fontWeight="300"
      opacity={channel.solo ? 1 : 0.25}
    />
    <Button
      width="0.8rem"
      height="0.8rem"
      p={0}
      bg="brightRed"
      borderRadius="50%"
      onClick={onPressMuted}
      color="white"
      fontSize={0}
      fontWeight="300"
      opacity={channel.muted ? 1 : 0.25}
    />
  </Box>
);
