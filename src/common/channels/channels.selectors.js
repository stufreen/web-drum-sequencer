import { createStructuredSelector } from 'reselect';

export const channelsSelector = createStructuredSelector({
  channels: state => state.channels,
});
