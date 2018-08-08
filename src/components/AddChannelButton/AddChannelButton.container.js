import { connect } from 'react-redux';
import { compose } from 'recompose';
import { AddChannelButtonComponent } from './AddChannelButton.component';
import { newChannel } from '../../common';

const mapDispatchToProps = {
  newChannel,
};

export const AddChannelButton = compose(
  connect(null, mapDispatchToProps),
)(AddChannelButtonComponent);
