import { createStructuredSelector } from 'reselect';
import {
  bpmSelector,
  startTimeSelector,
  playingSelector,
  patternSelector,
} from '../../common';

export const togglesSelectors = createStructuredSelector({
  bpm: bpmSelector,
  startTime: startTimeSelector,
  playing: playingSelector,
  pattern: patternSelector,
});
