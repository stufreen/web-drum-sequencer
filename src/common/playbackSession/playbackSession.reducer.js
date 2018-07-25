import { PLAYBACK_SESSION_CONSTANTS } from "./playbackSession.constants";
import { getAudioContext } from '../../services';
import { LOOKAHEAD } from '../../utils';

export const playbackSessionInitialState = {
  bpm: 240,
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
    default:
      return state;
  }
};
