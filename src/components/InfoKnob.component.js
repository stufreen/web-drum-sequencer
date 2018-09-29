import React from 'react';
import PropTypes from 'prop-types';
import { Knob } from './Knob.component';
import { Text, Box } from './design-system';

const Label = Text.extend`
  font-size: 0.7em;
  text-transform: uppercase;
  color: white;
  text-align: center;
`;

export const InfoKnob = ({
  label,
  minLabel,
  maxLabel,
  ...rest
}) => (
  <Box>
    <Label fontWeight="bold" mb={1}>
      {label}
    </Label>
    <Box display="flex" alignItems="baseline">
      <Label opacity="0.5">
        {minLabel}
      </Label>
      <Knob size={45} {...rest} />
      <Label opacity="0.5">
        {maxLabel}
      </Label>
    </Box>
  </Box>
);

InfoKnob.propTypes = {
  label: PropTypes.string.isRequired,
  minLabel: PropTypes.string.isRequired,
  maxLabel: PropTypes.string.isRequired,
};
