import { createStructuredSelector } from 'reselect';
import {
  channelsSelector,
  notesSelector,
  patternSelector,
  selectedChannelSelector,
  userSamplesSelector,
} from '../../common';

export const sampleSelectSelectors = createStructuredSelector({
  channels: channelsSelector,
  notes: notesSelector,
  pattern: patternSelector,
  selectedChannelId: selectedChannelSelector,
  userSamples: userSamplesSelector,
});
