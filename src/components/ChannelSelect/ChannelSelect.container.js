import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ChannelSelectComponent } from './ChannelSelect.component';
import { loadAndSetChannelSample } from '../../common';

const mapDispatchToProps = {
  loadAndSetChannelSample,
};

const handlers = withHandlers({
  onSelectSample: props => (sample) => {
    const { loadAndSetChannelSample: connectedSetChannelSample, channel } = props;
    connectedSetChannelSample(channel.id, sample.value);
  },
});

export const ChannelSelect = compose(
  connect(null, mapDispatchToProps),
  handlers,
)(ChannelSelectComponent);
