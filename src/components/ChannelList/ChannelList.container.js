import { connect } from 'react-redux'
import { compose } from 'recompose';
import { ChannelListComponent } from './ChannelList.component';
import { channelsSelector, toggleNote } from '../../common';

const mapDispatchToProps = {
  toggleNote,
};

export const ChannelList = compose(
  connect(channelsSelector, mapDispatchToProps),
)(ChannelListComponent);
