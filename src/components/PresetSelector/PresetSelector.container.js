import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { PresetSelectorComponent } from './PresetSelector.component';
import { setBPM, setChannels } from '../../common';
import presets from '../../presets';

const mapDispatchToProps = {
  setBPM,
  setChannels,
};

export const PresetSelector = compose(
  connect(null, mapDispatchToProps),
  withProps({
    presets,
  }),
  withHandlers({
    onSelectPreset: props => ({ value }) => {
      const { setBPM: connectedSetBPM, setChannels: connectedSetChannels } = props;
      connectedSetBPM(value.bpm);
      connectedSetChannels(value.channels);
    },
  }),
)(PresetSelectorComponent);
