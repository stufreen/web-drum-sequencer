import { createStructuredSelector } from 'reselect';
import { channelsSelector } from '../../common';

export const channelListSelectors = createStructuredSelector({
  channels: channelsSelector,
});;
