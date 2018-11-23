import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { SampleSelectComponent } from './SampleSelect.component';
import { loadAndSetChannelSample } from '../../common';
import { sampleSelectSelectors } from './SampleSelect.selectors';

const mapDispatchToProps = {
  loadAndSetChannelSample,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { loadAndSetChannelSample: connectedSetChannelSample, channel } = props;
    connectedSetChannelSample(channel.id, sample.value);
  },
  onSampleFileChosen: props => (e) => {
    console.log('File chosen!', e.target.files);
  },
});

export const SampleSelect = compose(
  connect(sampleSelectSelectors, mapDispatchToProps),
  handlers,
)(SampleSelectComponent);
