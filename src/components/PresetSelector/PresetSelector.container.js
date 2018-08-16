import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { PresetSelectorComponent } from './PresetSelector.component';
import { presetSelectorSelectors } from './PresetSelector.selectors';
import {
  setBPM,
  loadPreset,
  setPreset,
  setPattern,
} from '../../common';
import presets from '../../presets';

const mapDispatchToProps = {
  setBPM,
  loadPreset,
  setPreset,
  setPattern,
};

export const PresetSelector = compose(
  connect(presetSelectorSelectors, mapDispatchToProps),
  withProps({
    presets,
  }),
  withHandlers({
    onSelectPreset: props => ({ value }) => {
      if (value === 'SAVE_PRESET') {
        window.alert('save');
      } else if (value === 'SAVE_PRESET_AS') {
        window.alert('save as');
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
