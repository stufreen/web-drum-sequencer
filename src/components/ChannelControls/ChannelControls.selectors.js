import { createStructuredSelector, createSelector } from 'reselect';
import { channelsSelector, selectedChannelSelector } from '../../common';

const channelSelector = createSelector(
  channelsSelector,
  selectedChannelSelector,
  (channels, selectedChannelID) => {
    const selectedChannel = channels.find(
      channel => channel.id === selectedChannelID,
    );
    return typeof selectedChannel === 'undefined' ? channels[0] : selectedChannel;
  },
);

export const channelControlsSelectors = createStructuredSelector({
  channel: channelSelector,
});
