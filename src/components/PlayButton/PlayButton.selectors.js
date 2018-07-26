import { createStructuredSelector } from 'reselect';
import { playingSelector } from '../../common';

export const playButtonSelectors = createStructuredSelector({
  playing: playingSelector,
});
