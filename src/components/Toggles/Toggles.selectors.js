import { createStructuredSelector } from 'reselect';
import {
  bpmSelector,
  playingSelector,
  patternSelector,
} from '../../common';

export const togglesSelectors = createStructuredSelector({
  bpm: bpmSelector,
  playing: playingSelector,
  pattern: patternSelector,
});
