import { connect } from 'react-redux'
import { compose } from 'recompose';
import { PlayButtonComponent } from './PlayButton.component';
import { playButtonSelectors } from './PlayButton.selectors';
import { startPlayback, stopPlayback } from '../../common';

const mapDispatchToProps = {
  startPlayback,
  stopPlayback,
};

export const PlayButton = compose(
  connect(playButtonSelectors, mapDispatchToProps),
)(PlayButtonComponent);
