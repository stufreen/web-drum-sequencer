import * as R from 'ramda';
import { CHANNELS_CONSTANTS } from './channels.constants';
import samples from '../../samples.config';
import presets from '../../presets';

export const channelsInitialState = R.clone(presets[1].channels);

export const channelsReducer = (state = channelsInitialState, action) => {
  switch (action.type) {
    case CHANNELS_CONSTANTS.SET_CHANNEL_SAMPLE:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return { ...channel, sample: R.find(R.propEq('url', action.payload.sampleURL))(samples) };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNEL_GAIN:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return { ...channel, gain: action.payload.gain };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNEL_PAN:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return { ...channel, pan: action.payload.pan };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNEL_PITCH_COARSE:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return { ...channel, pitchCoarse: action.payload.pitchCoarse };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNEL_PITCH_FINE:
      return state.map((channel) => {
        if (channel.id === action.payload.channel) {
          return { ...channel, pitchFine: action.payload.pitchFine };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.ADD_CHANNEL:
      return [...state, action.payload];
    case CHANNELS_CONSTANTS.REMOVE_CHANNEL:
      return state.filter(channel => channel.id !== action.payload);
    case CHANNELS_CONSTANTS.SAMPLE_LOADED:
      return state.map((channel) => {
        if (channel.id === action.payload.channelID) {
          return { ...channel, sampleLoaded: action.payload.isLoaded };
        }
        return channel;
      });
    case CHANNELS_CONSTANTS.SET_CHANNELS:
      return [...action.payload];
    default:
      return state;
  }
};
