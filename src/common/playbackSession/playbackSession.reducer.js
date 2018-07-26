import { PLAYBACK_SESSION_CONSTANTS } from "./playbackSession.constants";
import { getAudioContext } from '../../services';
import { LOOKAHEAD } from '../../utils';

export const playbackSessionInitialState = {
  bpm: 100,
  playing: false,
  startTime: null,
};

export const playbackSessionReducer = (state = playbackSessionInitialState, action) => {
  switch (action.type) {
    case PLAYBACK_SESSION_CONSTANTS.START_PLAYBACK:
      return {
        ...state,
        playing: true,
        startTime: getAudioContext().currentTime + LOOKAHEAD,
      };
    case PLAYBACK_SESSION_CONSTANTS.STOP_PLAYBACK:
      return {
        ...state,
        playing: false,
        startTime: null,
      };
    default:
      return state;
  }
};
