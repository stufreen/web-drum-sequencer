import React from 'react';
import PropTypes from 'prop-types';
import { FancyButton } from '../FancyButton.component';

export const PlayButtonComponent = ({ startPlayback, stopPlayback, playing }) => (playing
  ? (
    <FancyButton
      onClick={stopPlayback}
      variant="red"
      mb={1}
      width="8rem"
    >
      Stop
    </FancyButton>
  )
  : (
    <FancyButton
      onClick={startPlayback}
      variant="green"
      mb={1}
      width="8rem"
    >
      Play
    </FancyButton>
  ));

PlayButtonComponent.propTypes = {
  startPlayback: PropTypes.func.isRequired,
  stopPlayback: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};
