import React from 'react';
import PropTypes from 'prop-types';
import { Knob } from './Knob.component';
import { ControlLabel, Box } from './design-system';

export const InfoKnob = ({
  label,
  minLabel,
  maxLabel,
  ...rest
}) => (
  <Box>
    <ControlLabel fontWeight="bold" mb={1} textAlign="center">
      {label}
    </ControlLabel>
    <Box display="flex" alignItems="baseline">
      <ControlLabel opacity="0.5" fontSize={1}>
        {minLabel}
      </ControlLabel>
      <Knob size={45} {...rest} />
      <ControlLabel opacity="0.5" fontSize={1}>
        {maxLabel}
      </ControlLabel>
    </Box>
  </Box>
);

InfoKnob.propTypes = {
  label: PropTypes.string.isRequired,
  minLabel: PropTypes.string.isRequired,
  maxLabel: PropTypes.string.isRequired,
};
