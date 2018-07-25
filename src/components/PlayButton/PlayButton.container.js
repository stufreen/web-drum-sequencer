import { connect } from 'react-redux'
import { compose } from 'recompose';
import { PlayButtonComponent } from './PlayButton.component';
import { startPlayback, stopPlayback, playbackSessionSelectors } from '../../common';

const mapDispatchToProps = {
  startPlayback,
  stopPlayback,
};

export const PlayButton = compose(
  connect(playbackSessionSelectors, mapDispatchToProps),
)(PlayButtonComponent);
