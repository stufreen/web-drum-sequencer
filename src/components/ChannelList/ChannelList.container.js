import { connect } from 'react-redux'
import { compose } from 'recompose';
import { ChannelListComponent } from './ChannelList.component';
import { channelListSelectors } from './ChannelList.selectors'
import { toggleNote } from '../../common';

const mapDispatchToProps = {
  toggleNote,
};

export const ChannelList = compose(
  connect(channelListSelectors, mapDispatchToProps),
)(ChannelListComponent);
