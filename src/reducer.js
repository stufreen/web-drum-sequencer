import { combineReducers } from 'redux';
import {
  channelsReducer,
  playbackSessionReducer,
  tempoReducer,
} from './common';

export default combineReducers({
  channels: channelsReducer,
  playbackSession: playbackSessionReducer,
  tempo: tempoReducer,
});
