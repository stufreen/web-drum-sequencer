import { connect } from 'react-redux';
import { compose } from 'recompose';
import { AddChannelButtonComponent } from './AddChannelButton.component';
import { addChannel } from '../../common';

const mapDispatchToProps = {
  addChannel,
};

export const AddChannelButton = compose(
  connect(null, mapDispatchToProps),
)(AddChannelButtonComponent);
