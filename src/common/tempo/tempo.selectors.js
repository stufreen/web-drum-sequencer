import * as R from 'ramda';

export const bpmSelector = R.path(['tempo', 'bpm']);
export const swingSelector = R.path(['tempo', 'swing']);
