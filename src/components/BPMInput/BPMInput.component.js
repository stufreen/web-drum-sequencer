import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, TextInput } from '../design-system';

export const BPMInputComponent = ({ bpm, setBPM }) => (
  <Box width="7rem">
    <Image
      src="/assets/images/bpm.png"
      alt="BPM"
      position="absolute"
      zIndex={0}
      width="7rem"
      style={{ transform: 'translateY(-5px)' }}
    />
    <TextInput
      position="relative"
      zIndex={1}
      width="5.5rem"
      height="1.5rem"
      p={3}
      fontSize="1.5rem"
      fontWeight="600"
      bg="transparent"
      id="bpm"
      color="brightRed"
      className="input-reset ba f2 b--mid-gray bw1 pa2 mb2 db w4 h3 bg-black red br2"
      type="number"
      value={bpm}
      onChange={(e) => {
        setBPM(parseInt(e.target.value, 10));
      }}
    />
    {/* <label htmlFor="bpm" >
      <input
        id="bpm"
        className="input-reset ba f2 b--mid-gray bw1 pa2 mb2 db w4 h3 bg-black red br2"
        type="number"
        value={bpm}
        onChange={(e) => {
          setBPM(parseInt(e.target.value, 10));
        }}
      />
    </label> */}
  </Box>
);

BPMInputComponent.propTypes = {
  bpm: PropTypes.number.isRequired,
  setBPM: PropTypes.func.isRequired,
};
