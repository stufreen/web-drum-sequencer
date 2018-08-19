import { connect } from 'react-redux';
import { compose } from 'recompose';
import { PlayButtonComponent } from './PlayButton.component';
import { playButtonSelectors } from './PlayButton.selectors';
import { startPlaybackAndResume, stopPlayback } from '../../common';

const mapDispatchToProps = {
  startPlaybackAndResume,
  stopPlayback,
};

export const PlayButton = compose(
  connect(playButtonSelectors, mapDispatchToProps),
)(PlayButtonComponent);
