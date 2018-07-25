import React from 'react';

export const PlayButtonComponent = ({ startPlayback, stopPlayback, playing }) =>
  playing ?
    (<button
      type="button"
      onClick={stopPlayback}
      className="flex align-center justify-center h3 w4 bg-red white sans-serif f3 fw7 mb4 br2"
    >
      <span>Stop</span>
    </button>) : 
    (<button
      type="button"
      onClick={startPlayback}
      className="flex align-center justify-center h3 w4 bg-green white sans-serif f3 fw7 mb4 br2"
    >
      <span>Play</span>
    </button>);
