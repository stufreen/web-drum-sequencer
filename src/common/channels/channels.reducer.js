import { uuid } from '../../services';
import { CHANNELS_CONSTANTS } from "./channels.constants";

export const channelsInitialState = [
  {
    id: 'snare',
    name: 'Snare',
    url: '/assets/drums/snare.wav',
    notes: [
      {
        beat: 0,
        id: uuid(),
      },
      {
        beat: 4,
        id: uuid(),
      },
      {
        beat: 8,
        id: uuid(),
      },
      {
        beat: 12,
        id: uuid(),
      }
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
            }
          }

          // Add a new note
          return {
            ...channel,
            notes: [
              ...channel.notes,
              {
                beat: action.payload.beat,
                id: uuid(),
              }
            ]
          };
        }
        return channel;
      });
    default:
      return state;
  }
};
