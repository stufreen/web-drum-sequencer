import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Label,
  TextInput,
  Button,
} from '../design-system';

const ShinyBox = Box.extend`
  background: linear-gradient(190deg, #19191D 0%, #303036 50%,#0a0e0a 51%, #29292D 100%);
`;

const BPMButton = Button.extend`
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const BPMInputComponent = ({ bpm, setBPM }) => (
  <ShinyBox
    display="flex"
    border="2px solid"
    borderColor="steel"
    borderRadius="0.5rem"
    position="relative"
  >
    <Label
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
      htmlFor="bpm"
    >
      BPM
    </Label>
    <TextInput
      min="1"
      max="999"
      flex="1 1 auto"
      position="relative"
      zIndex={1}
      width="3rem"
      height="1.5rem"
      p="0.7rem 0.2rem 0.5rem 0.7rem"
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
    <Box display="flex" flexDirection="column">
      <BPMButton
        color="white"
        bg="transparent"
        p={0}
        flex="auto"
        width="2rem"
        borderRadius="0 0.5rem 0 0"
        onClick={() => {
          setBPM(bpm + 1);
        }}
        aria-label="Increase beat per minute"
      >
        <svg width="10px" height="6px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <polygon points="0 7 12 7 6 0" fill="white" />
        </svg>
      </BPMButton>
      <BPMButton
        color="white"
        bg="transparent"
        p={0}
        flex="auto"
        width="2rem"
        borderRadius="0 0 0.5rem 0"
        onClick={() => {
          setBPM(bpm - 1);
        }}
        aria-label="Decrease beat per minute"
      >
        <svg width="10px" height="6px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <polygon points="0 0 12 0 6 7" fill="white" />
        </svg>
      </BPMButton>
    </Box>
  </ShinyBox>
);

BPMInputComponent.propTypes = {
  bpm: PropTypes.number.isRequired,
  setBPM: PropTypes.func.isRequired,
};
