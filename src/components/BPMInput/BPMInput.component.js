import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  TextInput,
  Button,
} from '../design-system';

const ShinyBox = Box.extend`
  background: linear-gradient(190deg, #223 0%, #334 50%,#0a0e0a 51%, #112 100%);
`;

export const BPMInputComponent = ({ bpm, setBPM }) => (
  <ShinyBox
    display="flex"
    border="2px solid"
    borderColor="steel"
    borderRadius="0.5rem"
    position="relative"
  >
    <Text
      position="absolute"
      left="0.5rem"
      top="-0.6em"
      color="gray"
      fontSize="0.6rem"
      fontWeight="600"
      bg="nearBlack"
      pl={1}
      pr={1}
      borderRadius="3px"
      letterSpacing="0.1em"
    >
      BPM
    </Text>
    <TextInput
      min="1"
      max="999"
      flex="1 1 auto"
      position="relative"
      zIndex={1}
      width="3rem"
      height="1.5rem"
      p="0.8rem"
      fontSize="1.5rem"
      lineHeight="1em"
      fontWeight="600"
      bg="transparent"
      id="bpm"
      color="brightRed"
      className="bpm-text-input"
      type="number"
      value={bpm}
      onChange={(e) => {
        setBPM(parseInt(e.target.value, 10));
      }}
    />
    <Box display="flex" flexDirection="column" width="3rem">
      <Button color="white" bg="transparent" p={0} flex="auto" width="3rem">UP</Button>
      <Button color="white" bg="transparent" p={0} flex="auto" width="3rem">DOWN</Button>
    </Box>
  </ShinyBox>
);

BPMInputComponent.propTypes = {
  bpm: PropTypes.number.isRequired,
  setBPM: PropTypes.func.isRequired,
};
