import { combineReducers } from 'redux';
import {
  channelsReducer,
  playbackSessionReducer,
} from './common';

export default combineReducers({
  channels: channelsReducer,
  playbackSession: playbackSessionReducer,
});
