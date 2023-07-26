import React from 'react';
import { Box } from '../design-system';
import { PlayButton } from '../PlayButton';
import { BPMInput } from '../BPMInput';
import { PresetSelector } from '../PresetSelector';
import { PatternSelector } from '../PatternSelector';
import { SwingControl } from '../SwingControl';

export const MasterControls = () => (
  <Box mb={3} display="flex" alignItems="stretch" height="3rem" justifyContent="space-between">
    <Box display="flex" mr={2}>
      <Box mr={2}>
        <PlayButton />
      </Box>
      <BPMInput />
      <SwingControl />
    </Box>
    <Box display="flex">
      <PatternSelector />
      <Box ml={2} width="15rem">
        <PresetSelector />
      </Box>
    </Box>
  </Box>
);
