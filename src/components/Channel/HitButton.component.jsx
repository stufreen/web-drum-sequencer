import React from 'react';
import PropTypes from 'prop-types';
import { HoverButton } from '../design-system';

export const HitButton = ({ channel, onMouseDown }) => (
  <HoverButton
    height={40}
    width={40}
    minWidth={40}
    bg="lightGray"
    activeBg="gray"
    transitionSpeed="0.1s"
    ml={2}
    p={0}
    onMouseDown={onMouseDown}
    onTouchStart={onMouseDown}
    onTouchEnd={e => e.preventDefault()}
    aria-label={`Play ${channel.sample.name}`}
    touch-action="manipulation"
  />
);

HitButton.propTypes = {
  channel: PropTypes.shape({
    sample: PropTypes.string.isRequired,
    gain: PropTypes.number.isRequired,
  }).isRequired,
  onMouseDown: PropTypes.func.isRequired,
};
