import { connect } from 'react-redux'
import { compose } from 'recompose';
import { TogglesComponent } from './Toggles.component';
import { toggleNote } from '../../common';

const mapDispatchToProps = {
  toggleNote,
};

export const Toggles = compose(
  connect(null, mapDispatchToProps),
)(TogglesComponent);
