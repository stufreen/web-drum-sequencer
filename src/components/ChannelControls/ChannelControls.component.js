import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';
import { ChannelSelect } from '../ChannelSelect';
import { InfoKnob } from '../InfoKnob.component';
import { LabelBox } from '../LabelBox';

export const ChannelControlsComponent = ({
  channel,
  onSetGain,
  onSetChannelPitchCoarse,
}) => (
  <LabelBox label="CHANNEL CONTROL">
    <Box p={2} width="100%" display="flex" alignItems="center" justifyContent="space-between">
      <Box width="17rem">
        <ChannelSelect channel={channel} />
      </Box>
      <Box bg="darkGray" px={3} py={2} borderRadius="0.5rem" display="flex" justifyContent="flex-end">
        <Box mr={4}>
          <InfoKnob label="VOL" minLabel="0" maxLabel="1" value={channel.gain * 100} onChange={onSetGain} />
        </Box>
        <Box>
          <InfoKnob
            label="PITCH"
            minLabel="-24"
            maxLabel="24"
            min="-24"
            max="24"
            value={channel.pitchCoarse || 0}
            onChange={onSetChannelPitchCoarse}
          />
        </Box>
      </Box>
    </Box>
  </LabelBox>
);

ChannelControlsComponent.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSetGain: PropTypes.func.isRequired,
  onSetChannelPitchCoarse: PropTypes.func.isRequired,
};
