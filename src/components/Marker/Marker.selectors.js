import { createSelector, createStructuredSelector } from 'reselect';
import {
  currentBeatSelector,
  bpmSelector,
  startTimeSelector,
  playingSelector,
} from '../../common';

const progressSelector = createSelector(
  currentBeatSelector,
  currentBeat => (currentBeat - 1) / 4,
);

export const markerSelectors = createStructuredSelector({
  progress: progressSelector,
  bpm: bpmSelector,
  startTime: startTimeSelector,
  playing: playingSelector,
});
