import { createStructuredSelector } from 'reselect';
import { channelsSelector, notesSelector, patternSelector } from '../../common';

export const channelSelectors = createStructuredSelector({
  channels: channelsSelector,
  notes: notesSelector,
  pattern: patternSelector,
});
