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

const ChannelBox = Box.extend`
  &.draggable-source--is-dragging {
    opacity: 0.2;
  }

  &.draggable-mirror {
    opacity: 0.9;
    z-index: 10;
  }
`;

const MoveImage = Image.extend`
  cursor: move;
  opacity: 0.2;
  transition: opacity 0.1s;

  &:hover, &:focus, &:active {
    opacity: 0.3;
  }
`;

export const ChannelComponent = ({
  channel,
  onPressRemove,
  notes,
  pattern,
  onPressHitButton,
  onTouchChannel,
  selectedChannelId,
}) => (
  <ChannelBox
    width="100%"
    display="flex"
    flex="1 1 auto"
    p={1}
    alignItems="stretch"
    borderRadius={0}
    onMouseDown={onTouchChannel}
    bg={selectedChannelId === channel.id ? 'darkGray' : 'transparent'}
    outline="none"
    className="wds-draggable"
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
      <MoveImage src={construction} height="2.5rem" mr={3} userSelect="none" className="wds-channel-handle" />
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
  </ChannelBox>
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
