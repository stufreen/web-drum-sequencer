import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { PresetSelectorComponent } from './PresetSelector.component';
import { presetSelectorSelectors } from './PresetSelector.selectors';
import {
  setBPM,
  loadPreset,
  setPreset,
  setPattern,
  savePresetAs,
  deletePreset,
  setPresetPrompt,
  savePreset,
} from '../../common';
import presets from '../../presets';

const mapDispatchToProps = {
  setBPM,
  loadPreset,
  setPreset,
  setPattern,
  savePresetAs,
  deletePreset,
  setPresetPrompt,
  savePreset,
};

export const PresetSelector = compose(
  connect(presetSelectorSelectors, mapDispatchToProps),
  withProps({
    presets,
  }),
  withHandlers({
    onSelectPreset: props => ({ value }) => {
      if (value === 'SAVE_PRESET') {
        const {
          savePreset: connectedSavePreset,
          currentPreset,
          currentState,
        } = props;
        connectedSavePreset({
          ...currentState,
          name: currentPreset.name,
        });
      } else if (value === 'DELETE_PRESET') {
        const {
          setBPM: connectedSetBPM,
          loadPreset: connectedLoadPreset,
          setPreset: connectedSetPreset,
          setPattern: connectedSetPattern,
          deletePreset: connectedDeletePreset,
          currentPreset,
        } = props;
        connectedSetBPM(presets[0].bpm);
        connectedLoadPreset(presets[0].channels, presets[0].notes);
        connectedSetPreset(presets[0].name);
        connectedSetPattern(0);
        connectedDeletePreset(currentPreset.name);
      } else if (value === 'SAVE_PRESET_AS') {
        const {
          setPresetPrompt: connectedSetPresetPrompt,
        } = props;
        connectedSetPresetPrompt(true);
      } else {
        const {
          setBPM: connectedSetBPM,
          loadPreset: connectedLoadPreset,
          setPreset: connectedSetPreset,
          setPattern: connectedSetPattern,
        } = props;
        connectedSetBPM(value.bpm);
        connectedLoadPreset(value.channels, value.notes);
        connectedSetPreset(value.name);
        connectedSetPattern(0);
      }
    },
  }),
)(PresetSelectorComponent);
