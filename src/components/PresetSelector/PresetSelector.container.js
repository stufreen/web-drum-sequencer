import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { PresetSelectorComponent } from './PresetSelector.component';
import { presetSelectorSelectors } from './PresetSelector.selectors';
import { setBPM, setChannels, setPreset } from '../../common';
import presets from '../../presets';

const mapDispatchToProps = {
  setBPM,
  setChannels,
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
        setChannels: connectedSetChannels,
        setPreset: connectedSetPreset,
      } = props;
      connectedSetBPM(value.bpm);
      connectedSetChannels(value.channels);
      connectedSetPreset(value.name);
    },
  }),
)(PresetSelectorComponent);
