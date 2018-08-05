import React from 'react';
import { Box } from '../design-system';
import { PlayButton } from '../PlayButton';
import { BPMInput } from '../BPMInput';
import { PresetSelector } from '../PresetSelector';

export const MasterControls = () => (
  <Box mb={4} display="flex" alignItems="center" justifyContent="space-between">
    <Box display="flex">
      <Box mr={3}>
        <PlayButton />
      </Box>
      <Box>
        <BPMInput />
      </Box>
    </Box>
    <Box width="20rem">
      <PresetSelector />
    </Box>
  </Box>
);
