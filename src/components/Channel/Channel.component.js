import React from 'react';
import PropTypes from 'prop-types';
import { ChannelLabel } from './ChannelLabel.component';
import { Toggles } from '../Toggles';
import { Box } from '../design-system';

export const Channel = ({ channel }) => (
  <Box mb={3} display="flex">
    <ChannelLabel>
      {channel.name}
    </ChannelLabel>
    <Toggles notes={channel.notes} channelID={channel.id} />
  </Box>
);

Channel.propTypes = {
  channel: PropTypes.shape({
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
