import { createStructuredSelector } from 'reselect';
import {
  channelsSelector,
  notesSelector,
  patternSelector,
  selectedChannelSelector,
} from '../../common';

export const channelSelectors = createStructuredSelector({
  channels: channelsSelector,
  notes: notesSelector,
  pattern: patternSelector,
  selectedChannelId: selectedChannelSelector,
});
