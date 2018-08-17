import { combineReducers } from 'redux';
import {
  channelsReducer,
  playbackSessionReducer,
  tempoReducer,
  masterReducer,
  notesReducer,
  presetsReducer,
  windowReducer,
} from './common';

export default combineReducers({
  channels: channelsReducer,
  playbackSession: playbackSessionReducer,
  tempo: tempoReducer,
  master: masterReducer,
  notes: notesReducer,
  presets: presetsReducer,
  window: windowReducer,
});
