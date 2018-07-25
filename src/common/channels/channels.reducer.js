import { CHANNELS_CONSTANTS } from "./channels.constants";

export const channelsInitialState = [
  {
    id: 'snare',
    name: 'Snare',
    file: '/assets/snare.wav',
    notes: [0, 4, 8, 12],
  },
];

export const channelsReducer = (state = channelsInitialState, action) => {
  switch (action.type) {
    case CHANNELS_CONSTANTS.ADD_CHANNEL:
      return state;
    case CHANNELS_CONSTANTS.TOGGLE_NOTE:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          if(channel.notes.indexOf(action.payload.beat) >= 0) {
            return {
              ...channel,
              notes: channel.notes.filter(note => note !== action.payload.beat),
            }
          }
          return {
            ...channel,
            notes: [...channel.notes, action.payload.beat]
          };
        }
        return channel;
      });
    default:
      return state;
  }
};
