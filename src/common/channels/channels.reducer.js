import * as R from 'ramda';
import { uuid } from '../../services/uuid';
import { CHANNELS_CONSTANTS } from './channels.constants';
import samples from '../../samples.config.json';
import presets from '../../presets';

export const channelsInitialState = presets[0].channels;

const findNote = (notes, beat) => notes.find(note => note.beat === beat);

export const channelsReducer = (state = channelsInitialState, action) => {
  switch (action.type) {
    case CHANNELS_CONSTANTS.TOGGLE_NOTE:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          // Untoggle (remove) a note
          if (findNote(channel.notes, action.payload.beat)) {
            return {
              ...channel,
              notes: channel.notes.filter(note => note.beat !== action.payload.beat),
            };
          }

          // Add a new note
          return {
            ...channel,
            notes: [
              ...channel.notes,
              {
                beat: action.payload.beat,
                id: uuid(),
              },
            ],
          };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNEL_SAMPLE:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return {
            ...channel,
            sample: R.find(R.propEq('url', action.payload.sample))(samples),
          };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNEL_GAIN:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return {
            ...channel,
            gain: action.payload.gain,
          };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.ADD_CHANNEL:
      return [
        ...state,
        {
          id: uuid(),
          sample: samples[0],
          gain: 1,
          notes: [],
        },
      ];
    case CHANNELS_CONSTANTS.REMOVE_CHANNEL:
      return state.filter(channel => channel.id !== action.payload);
    default:
      return state;
  }
};
