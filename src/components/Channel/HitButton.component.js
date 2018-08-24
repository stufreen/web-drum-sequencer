import React from 'react';
import PropTypes from 'prop-types';
import { playNoteNow } from '../../services/audioScheduler';
import { HoverButton } from '../design-system';

export const HitButton = ({ channel }) => (
  <HoverButton
    height={30}
    width={30}
    bg="lightGray"
    activeBg="gray"
    transitionSpeed="0.1s"
    ml={2}
    p={0}
    onMouseDown={() => {
      playNoteNow(channel);
    }}
  />
);

HitButton.propTypes = {
  channel: PropTypes.shape({
    sample: PropTypes.object.isRequired,
    gain: PropTypes.number.isRequired,
  }).isRequired,
};
