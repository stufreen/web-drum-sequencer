import React from 'react';
import { getAudioContext } from '../../services/audioContext';

export const PlayButtonComponent = ({ startPlayback }) => (
  <button
    type="button"
    // onClick={startPlayback}
    onClick={() => {
      const ac = getAudioContext();
      console.log(ac);
    }}
    className="flex align-center justify-center h3 w4 bg-green white sans-serif f3 fw7 mb4 br2"
  >
    <span>Play</span>
  </button>
);
