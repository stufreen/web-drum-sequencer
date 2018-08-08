import { createStructuredSelector } from 'reselect';
import { channelsSelector, notesSelector } from '../../common';

export const channelSelectors = createStructuredSelector({
  channels: channelsSelector,
  notes: notesSelector,
});
