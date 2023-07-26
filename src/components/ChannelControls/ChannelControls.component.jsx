import React from 'react';
import PropTypes from 'prop-types';
import {
  detuneSupported,
} from '../../services/featureChecks';
import { Box } from '../design-system';
import { SampleSelect } from '../SampleSelect';
import { InfoKnob } from '../InfoKnob.component';
import { LabelBox } from '../LabelBox';

const ControlCluster = Box.extend`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.3rem;
  display: flex;
  margin: 0.5rem;
  align-items: flex-start;
  padding: 0.8rem;
`;

export const ChannelControlsComponent = ({
  channel,
  onSetGain,
  onSetPan,
  onSetChannelPitchCoarse,
  onSetReverb,
}) => (
  <LabelBox label="CHANNEL CONTROL">
    <ControlCluster>
      <Box width="17rem" pr={2}>
        <SampleSelect channel={channel} />
      </Box>
      <Box>
        {detuneSupported && (
          <InfoKnob
            label="PITCH"
            minLabel="-24"
            maxLabel="24"
            min="-24"
            max="24"
            value={channel.pitchCoarse || 0}
            onChange={onSetChannelPitchCoarse}
          />
        )}
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
    <ControlCluster>
      <Box>
        <InfoKnob
          label="REVERB"
          minLabel="0"
          maxLabel="1"
          min="0"
          max="1"
          step="0.01"
          value={channel.reverb || 0}
          onChange={onSetReverb}
        />
      </Box>
    </ControlCluster>
  </LabelBox>
);

ChannelControlsComponent.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pitchCoarse: PropTypes.number,
    reverb: PropTypes.number,
    gain: PropTypes.number,
    pan: PropTypes.number,
  }).isRequired,
  onSetGain: PropTypes.func.isRequired,
  onSetPan: PropTypes.func.isRequired,
  onSetChannelPitchCoarse: PropTypes.func.isRequired,
  onSetReverb: PropTypes.func.isRequired,
};
