import React from 'react';
import { Box } from '../design-system';
import { ChannelHeaderLabel } from './ChannelHeaderLabel.component';
import { Marker } from '../Marker';

export const ChannelHeader = () => (
  <Box bg="steel" display="flex" mt={4} mb={4} pr={40}>
    <ChannelHeaderLabel width="16rem" mr={3}>
      Channels
    </ChannelHeaderLabel>
    <Marker>
      <ChannelHeaderLabel flex="1 1 auto">
        1
      </ChannelHeaderLabel>
      <ChannelHeaderLabel flex="1 1 auto">
        2
      </ChannelHeaderLabel>
      <ChannelHeaderLabel flex="1 1 auto">
        3
      </ChannelHeaderLabel>
      <ChannelHeaderLabel flex="1 1 auto">
        4
      </ChannelHeaderLabel>
    </Marker>
  </Box>
);
