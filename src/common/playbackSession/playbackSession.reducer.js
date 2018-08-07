import { PLAYBACK_SESSION_CONSTANTS } from './playbackSession.constants';
import { getAudioContext } from '../../services/audioContext';
import { LOOKAHEAD } from '../../services/audioEngine.config';

export const playbackSessionInitialState = {
  playing: false,
  startTime: null,
  currentBeat: 1,
};

export const playbackSessionReducer = (state = playbackSessionInitialState, action) => {
  switch (action.type) {
    case PLAYBACK_SESSION_CONSTANTS.START_PLAYBACK:
      return {
        ...state,
        playing: true,
        startTime: getAudioContext().currentTime + LOOKAHEAD + LOOKAHEAD,
      };
    case PLAYBACK_SESSION_CONSTANTS.STOP_PLAYBACK:
      return {
        ...state,
        playing: false,
        startTime: null,
      };
    case PLAYBACK_SESSION_CONSTANTS.SET_START_TIME:
      return {
        ...state,
        startTime: action.payload,
      };
    default:
      return state;
  }
};
