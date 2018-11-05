import React from 'react';
import { Box, Button } from '../design-system';

export const MuteSoloComponent = ({ onPressMuted, onPressSolo, channel}) => (
  <Box width="1.2rem" display="flex" ml={2} height="100%" flexDirection="column">
    <Button width="1.2rem" flex="1 1 auto" mb={1} p={0} bg={channel.solo ? 'gold' : 'black'} onClick={onPressSolo} />
    <Button width="1.2rem" flex="1 1 auto" p={0} bg={channel.muted ? 'brightRed' : 'black'} onClick={onPressMuted} />
  </Box>
);
