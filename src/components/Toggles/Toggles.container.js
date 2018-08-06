import { connect } from 'react-redux';
import { compose } from 'recompose';
import { TogglesComponent } from './Toggles.component';
import { toggleNote } from '../../common';
import { togglesSelectors } from './Toggles.selectors';

const mapDispatchToProps = {
  toggleNote,
};

export const Toggles = compose(
  connect(togglesSelectors, mapDispatchToProps),
)(TogglesComponent);
