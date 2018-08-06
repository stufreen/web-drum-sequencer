import * as R from 'ramda';

export const playingSelector = R.path(['playbackSession', 'playing']);
export const bpmSelector = R.path(['playbackSession', 'bpm']);
export const startTimeSelector = R.path(['playbackSession', 'startTime']);
