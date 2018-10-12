import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';
import { Channel } from '../Channel';
import { AddChannelButton } from '../AddChannelButton';

export const ChannelListComponent = ({ channels }) => (
  <Box mt={2}>
    {channels.map(channel => <Channel key={channel.id} channel={channel} />)}
    <AddChannelButton />
  </Box>
);

ChannelListComponent.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
