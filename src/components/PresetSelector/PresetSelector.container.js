import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { PresetSelectorComponent } from './PresetSelector.component';
import { presetSelectorSelectors } from './PresetSelector.selectors';
import { setBPM, loadPreset, setPreset } from '../../common';
import presets from '../../presets';

const mapDispatchToProps = {
  setBPM,
  loadPreset,
  setPreset,
};

export const PresetSelector = compose(
  connect(presetSelectorSelectors, mapDispatchToProps),
  withProps({
    presets,
  }),
  withHandlers({
    onSelectPreset: props => ({ value }) => {
      const {
        setBPM: connectedSetBPM,
        loadPreset: connectedLoadPreset,
        setPreset: connectedSetPreset,
      } = props;
      connectedSetBPM(value.bpm);
      connectedLoadPreset(value.channels, value.notes);
      connectedSetPreset(value.name);
    },
  }),
)(PresetSelectorComponent);
