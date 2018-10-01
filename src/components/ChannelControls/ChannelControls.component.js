import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';
import { ChannelSelect } from '../ChannelSelect';
import { InfoKnob } from '../InfoKnob.component';
import { LabelBox } from '../LabelBox';

const ControlCluster = Box.extend`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.3rem;
  display: flex;
  margin: 0.5rem;
  align-items: flex-start;
  padding: 1rem;
`;

export const ChannelControlsComponent = ({
  channel,
  onSetGain,
  onSetPan,
  onSetChannelPitchCoarse,
}) => (
  <LabelBox label="CHANNEL CONTROL">
    <ControlCluster>
      <Box width="17rem" pr={2}>
        <ChannelSelect channel={channel} />
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
    </ControlCluster>
    <ControlCluster>
      <Box mr={4}>
        <InfoKnob
          label="PAN"
          minLabel="L"
          maxLabel="R"
          min="-1"
          max="1"
          step="0.1"
          value={channel.pan || 0}
          onChange={onSetPan}
        />
      </Box>
      <Box>
        <InfoKnob
          label="VOL"
          minLabel="0"
          maxLabel="1"
          value={channel.gain * 100}
          onChange={onSetGain}
        />
      </Box>
    </ControlCluster>
  </LabelBox>
);

ChannelControlsComponent.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSetGain: PropTypes.func.isRequired,
  onSetPan: PropTypes.func.isRequired,
  onSetChannelPitchCoarse: PropTypes.func.isRequired,
};
