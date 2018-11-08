import React from 'react';
import PropTypes from 'prop-types';
import { Toggles } from '../Toggles';
import {
  Box,
  Text,
  Image,
} from '../design-system';
import { RemoveButton } from './RemoveButton.component';
import { HitButton } from './HitButton.component';
import { MuteSolo } from '../MuteSolo';
import construction from '../../assets/images/construction-light.svg';

export const ChannelComponent = ({
  channel,
  onPressRemove,
  notes,
  pattern,
  onPressHitButton,
  onTouchChannel,
  selectedChannelId,
}) => (
  <Box
    width="100%"
    display="flex"
    flex="1 1 auto"
    p={1}
    alignItems="stretch"
    borderRadius={0}
    onMouseDown={onTouchChannel}
    bg={selectedChannelId === channel.id ? 'darkGray' : 'transparent'}
    outline="none"
  >
    <Box
      bg={selectedChannelId === channel.id ? 'steel' : 'darkGray'}
      width="16rem"
      p={2}
      borderRadius="0.25rem"
      mr={[2, 2, 2, 3, 4]}
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Image src={construction} height="2.5rem" mr={3} opacity={0.2} userSelect="none" />
      <Box flex="1 1 auto">
        <Text color="white" fontWeight="normal" textAlign="left" fontSize={2} userSelect="none">
          {channel.sample.name}
        </Text>
      </Box>
      <MuteSolo channel={channel} />
      <HitButton channel={channel} onMouseDown={onPressHitButton} />
    </Box>
    <Toggles
      notes={notes[channel.id][pattern]}
      channelID={channel.id}
    />
    <RemoveButton onClick={onPressRemove} />
  </Box>
);

ChannelComponent.propTypes = {
  notes: PropTypes.objectOf(PropTypes.array).isRequired,
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onPressRemove: PropTypes.func.isRequired,
  pattern: PropTypes.number.isRequired,
  onPressHitButton: PropTypes.func.isRequired,
  onTouchChannel: PropTypes.func.isRequired,
  selectedChannelId: PropTypes.string.isRequired,
};
