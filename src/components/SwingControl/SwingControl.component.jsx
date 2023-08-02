import React from 'react';
import PropTypes from 'prop-types';
import { Knob } from '../Knob.component';
import { Box, Text } from '../design-system';

const LabelText = Text.extend`
  transform: translateY(-0.3em);
`;

export const SwingControlComponent = ({
  onSetSwing,
  swing,
}) => (
  <Box alignItems="center" ml={2} display="flex" flexDirection="column">
    <LabelText
      color="gray"
      fontSize="0.6rem"
      fontWeight="600"
      bg="nearBlack"
      pl={1}
      pr={1}
      letterSpacing="0.1em"
    >
      SWING
    </LabelText>
    <Knob size={35} onChange={onSetSwing} value={swing} min={0} max={1} step="0.1" />
  </Box>
);

SwingControlComponent.propTypes = {
  onSetSwing: PropTypes.func.isRequired,
  swing: PropTypes.number.isRequired,
};
