import { createStructuredSelector } from 'reselect';
import { channelsSelector } from '../../common';

export const channelSelectors = createStructuredSelector({
  channels: channelsSelector,
});
