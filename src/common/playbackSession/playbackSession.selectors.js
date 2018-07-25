import { createStructuredSelector } from 'reselect';

export const playbackSessionSelectors = createStructuredSelector({
  playing: state => state.playbackSession.playing,
});
