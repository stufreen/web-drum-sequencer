import React from 'react';
import PropTypes from 'prop-types';
import { ChannelSelect } from '../ChannelSelect';
import { Toggles } from '../Toggles';
import { Box } from '../design-system';
import { RemoveButton } from './RemoveButton.component';
import { Knob } from '../Knob.component';
import { HitButton } from './HitButton.component';

export const ChannelComponent = ({
  channel,
  onSetGain,
  onPressRemove,
  notes,
}) => (
  <Box mb={3} display="flex">
    <Box
      bg="darkGray"
      width="16rem"
      p={2}
      borderRadius="0.25rem"
      mr={4}
      display="flex"
      alignItems="center"
      position="relative"
    >
      <ChannelSelect channel={channel} />
      <Knob size={40} value={channel.gain * 100} onChange={onSetGain} />
      <HitButton channel={channel} />
    </Box>
    <Toggles notes={notes[channel.id]} channelID={channel.id} />
    <RemoveButton onClick={onPressRemove} />
  </Box>
);

ChannelComponent.propTypes = {
  notes: PropTypes.objectOf(PropTypes.array).isRequired,
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSetGain: PropTypes.func.isRequired,
  onPressRemove: PropTypes.func.isRequired,
};
