import * as R from 'ramda';
import { CHANNELS_CONSTANTS } from './channels.constants';
import samples from '../../samples.config.json';
import presets from '../../presets';

export const channelsInitialState = presets[0].channels;

export const channelsReducer = (state = channelsInitialState, action) => {
  switch (action.type) {
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
          id: action.payload,
          sample: samples[0],
          gain: 1,
          notes: [],
        },
      ];
    case CHANNELS_CONSTANTS.REMOVE_CHANNEL:
      return state.filter(channel => channel.id !== action.payload);
    case CHANNELS_CONSTANTS.SET_CHANNELS:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};
