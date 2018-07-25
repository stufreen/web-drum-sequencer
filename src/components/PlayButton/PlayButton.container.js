import { connect } from 'react-redux'
import { compose } from 'recompose';
import { PlayButtonComponent } from './PlayButton.component';
import { startPlayback } from '../../common';

const mapDispatchToProps = {
  startPlayback,
};

export const PlayButton = compose(
  connect(null, mapDispatchToProps),
)(PlayButtonComponent);
