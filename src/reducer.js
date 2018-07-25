import { combineReducers } from 'redux';
import {
  notesReducer,
  channelsReducer,
} from './common';

export default combineReducers({
  notes: notesReducer,
  channels: channelsReducer,
});
