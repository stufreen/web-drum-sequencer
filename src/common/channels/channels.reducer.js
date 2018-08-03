import * as R from 'ramda';
import { uuid } from '../../services/uuid';
import { CHANNELS_CONSTANTS } from './channels.constants';
import samples from '../../samples.config.json';

export const channelsInitialState = [
  {
    id: uuid(),
    sample: samples[0],
    gain: 1,
    notes: [
      {
        beat: 1,
        id: uuid(),
      },
      {
        beat: 2.5,
        id: uuid(),
      },
      {
        beat: 4.25,
        id: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    sample: samples[1],
    gain: 1,
    notes: [
      {
        beat: 2,
        id: uuid(),
      },
      {
        beat: 4,
        id: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    sample: samples[2],
    gain: 1,
    notes: [
      {
        beat: 1,
        id: uuid(),
      },
      {
        beat: 2,
        id: uuid(),
      },
      {
        beat: 3,
        id: uuid(),
      },
      {
        beat: 4,
        id: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    sample: samples[3],
    gain: 1,
    notes: [
      {
        beat: 1.75,
        id: uuid(),
      },
      {
        beat: 3.5,
        id: uuid(),
      },
    ],
  },
];

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
    default:
      return state;
  }
};
