import { createStructuredSelector } from 'reselect';
import { bpmSelector } from '../../common';

export const bpmInputSelectors = createStructuredSelector({
  bpm: bpmSelector,
});