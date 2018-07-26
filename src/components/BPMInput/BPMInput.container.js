import { connect } from 'react-redux';
import { compose } from 'recompose';
import { BPMInputComponent } from './BPMInput.component';
import { bpmInputSelectors } from './BPMInput.selectors';
import { setBPM } from '../../common';

const mapDispatchToProps = {
  setBPM,
};

export const BPMInput = compose(
  connect(bpmInputSelectors, mapDispatchToProps),
)(BPMInputComponent);
