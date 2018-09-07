import React from 'react';
import PropTypes from 'prop-types';
import { ChannelSelect } from '../ChannelSelect';
import { Box } from '../design-system';
import { Knob } from '../Knob.component';

export const ChannelControlsComponent = ({
  channel,
  onSetGain,
  onSetChannelPitchCoarse,
}) => (
  <Box mb={4} display="flex" alignItems="stretch" height="3rem" justifyContent="space-between" bg="darkGray">
    <ChannelSelect channel={channel} />
    <Knob size={40} value={channel.gain * 100} onChange={onSetGain} />
    <Knob
      size={40}
      min="-24"
      max="24"
      value={channel.pitchCoarse || 0}
      onChange={onSetChannelPitchCoarse}
    />
  </Box>
);

ChannelControlsComponent.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSetGain: PropTypes.func.isRequired,
  onSetChannelPitchCoarse: PropTypes.func.isRequired,
};
