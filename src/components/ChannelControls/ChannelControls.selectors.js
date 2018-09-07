import { createStructuredSelector, createSelector } from 'reselect';
import { channelsSelector, selectedChannelSelector } from '../../common';

const channelSelector = createSelector(
  channelsSelector,
  selectedChannelSelector,
  (channels, selectedChannelID) => channels.find(
    channel => channel.id === selectedChannelID,
  ),
);

export const channelControlsSelectors = createStructuredSelector({
  channel: channelSelector,
});
