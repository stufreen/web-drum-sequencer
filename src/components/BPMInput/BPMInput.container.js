import { connect } from 'react-redux'
import { compose, withState } from 'recompose';
import { BPMInputComponent } from './BpmInput.component';
import { bpmInputSelectors } from './BpmInput.selectors';
import { setBPM } from '../../common';

const mapDispatchToProps = {
  setBPM,
};

export const BPMInput = compose(
  connect(bpmInputSelectors, mapDispatchToProps),
)(BPMInputComponent);
