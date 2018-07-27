import React from 'react';
import PropTypes from 'prop-types';

export const PlayButtonComponent = ({ startPlayback, stopPlayback, playing }) => (playing
  ? (
    <button
      type="button"
      onClick={stopPlayback}
      className="flex align-center justify-center h3 w4 bg-red white sans-serif f5 fw3 ttu mb4 br2 bn"
    >
      <span>
        Stop
      </span>
    </button>
  )
  : (
    <button
      type="button"
      onClick={startPlayback}
      className="flex align-center justify-center h3 w4 bg-green white sans-serif f5 fw3 ttu mb4 br2 bn"
    >
      <span>
        Play
      </span>
    </button>
  ));

PlayButtonComponent.propTypes = {
  startPlayback: PropTypes.func.isRequired,
  stopPlayback: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};
