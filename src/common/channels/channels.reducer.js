import { uuid } from '../../services/uuid';
import { CHANNELS_CONSTANTS } from './channels.constants';

export const channelsInitialState = [
  {
    id: 'kick',
    name: 'Kick',
    url: '/assets/drums/roland-707/kick-1-r1.wav',
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
    id: 'snare',
    name: 'Snare',
    url: '/assets/drums/roland-707/snare-1-r1.wav',
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
    id: 'hhclosed',
    name: 'Hi Hat',
    url: '/assets/drums/roland-707/hat-closed-r1.wav',
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
    id: 'rim',
    name: 'Rim',
    url: '/assets/drums/roland-707/rim-r1.wav',
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
    default:
      return state;
  }
};
