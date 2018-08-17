import { connect } from 'react-redux';
import { compose } from 'recompose';
import { SavePresetModalComponent } from './SavePresetModal.component';
import { savePresetModalSelectors } from './SavePresetModal.selectors';
import { setPresetPrompt } from '../../common';

const mapDispatchToProps = {
  setPresetPrompt,
};

export const SavePresetModal = compose(
  connect(savePresetModalSelectors, mapDispatchToProps),
)(SavePresetModalComponent);
