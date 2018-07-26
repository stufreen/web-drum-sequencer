import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { TogglesComponent } from './Toggles.component';
import { toggleNote, currentBeatSelector } from '../../common';

const mapDispatchToProps = {
  toggleNote,
};

const mapStateToProps = createStructuredSelector({
  currentBeat: currentBeatSelector,
});

export const Toggles = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TogglesComponent);
