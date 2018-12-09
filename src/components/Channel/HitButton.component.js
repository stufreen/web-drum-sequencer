import React from 'react';
import PropTypes from 'prop-types';
import { HoverButton } from '../design-system';

export const HitButton = ({ channel, onMouseDown }) => (
  <HoverButton
    height={30}
    width={30}
    minWidth={30}
    bg="lightGray"
    activeBg="gray"
    transitionSpeed="0.1s"
    ml={2}
    p={0}
    onMouseDown={onMouseDown}
    aria-label={`Play ${channel.sample.name}`}
  />
);

HitButton.propTypes = {
  channel: PropTypes.shape({
    sample: PropTypes.string.isRequired,
    gain: PropTypes.number.isRequired,
  }).isRequired,
  onMouseDown: PropTypes.func.isRequired,
};
