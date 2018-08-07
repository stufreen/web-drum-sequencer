import * as R from 'ramda';

export const playingSelector = R.path(['playbackSession', 'playing']);
export const startTimeSelector = R.path(['playbackSession', 'startTime']);
