import { connect } from 'react-redux';
import { compose } from 'recompose';
import { SavePresetModalComponent } from './SavePresetModal.component';
import { savePresetModalSelectors } from './SavePresetModal.selectors';
import {
  setPresetPrompt,
  savePresetAs,
} from '../../common';

const mapDispatchToProps = {
  setPresetPrompt,
  savePresetAs,
};

export const SavePresetModal = compose(
  connect(savePresetModalSelectors, mapDispatchToProps),
)(SavePresetModalComponent);
