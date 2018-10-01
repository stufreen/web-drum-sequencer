import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { PresetSelectorComponent } from './PresetSelector.component';
import { presetSelectorSelectors } from './PresetSelector.selectors';
import {
  setBPM,
  setPreset,
  setPattern,
  savePresetAs,
  deletePreset,
  setPresetPrompt,
  savePreset,
  loadPreset,
  erasePreset,
} from '../../common';
import presets from '../../presets';

const mapDispatchToProps = {
  setBPM,
  setPreset,
  setPattern,
  savePresetAs,
  deletePreset,
  setPresetPrompt,
  savePreset,
  loadPreset,
  erasePreset,
};

export const PresetSelector = compose(
  connect(presetSelectorSelectors, mapDispatchToProps),
  withProps({
    presets,
  }),
  withHandlers({
    onSelectPreset: props => ({ value }) => {
      const {
        savePreset: connectedSavePreset,
        setPresetPrompt: connectedSetPresetPrompt,
        erasePreset: connectedErasePreset,
        loadPreset: connectedLoadPreset,
        currentPreset,
        currentState,
      } = props;
      switch (value) {
        case 'SAVE_PRESET':
          connectedSavePreset({
            ...currentState,
            name: currentPreset.name,
          });
          break;
        case 'DELETE_PRESET':
          connectedErasePreset(currentPreset.name);
          break;
        case 'SAVE_PRESET_AS':
          connectedSetPresetPrompt(true);
          break;
        default:
          connectedLoadPreset(value);
          break;
      }
    },
  }),
)(PresetSelectorComponent);
