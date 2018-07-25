import { PLAYBACK_SESSION_CONSTANTS } from "./playbackSession.constants";
import { getAudioContext } from '../../services';

export const playbackSessionInitialState = [
  {
    bpm: 100,
    playing: false,
    startTime: null,
  },
];

export const playbackSessionReducer = (state = playbackSessionInitialState, action) => {
  switch (action.type) {
    case PLAYBACK_SESSION_CONSTANTS.START_PLAYBACK:
      return {
        ...state,
        playing: true,
        startTime: getAudioContext().currentTime,
      };
    default:
      return state;
  }
};
