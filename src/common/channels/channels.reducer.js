import { CHANNELS_CONSTANTS } from "./channels.constants";

export const channelsInitialState = {
  channels: [
    {
      id: 'snare',
      name: 'Snare',
      file: '/assets/snare.wav',
    },
  ],
};

export const channelsReducer = (state = channelsInitialState, action) => {
  switch (action.type) {
    case CHANNELS_CONSTANTS.ADD_CHANNEL:
      return state;
    default:
      return state;
  }
};
