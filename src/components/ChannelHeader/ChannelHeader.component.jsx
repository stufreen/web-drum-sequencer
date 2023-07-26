import React from 'react';
import { Box } from '../design-system';
import { ChannelHeaderLabel } from './ChannelHeaderLabel.component';
import { Marker } from '../Marker';

export const ChannelHeader = () => (
  <Box bg="black" display="flex" mt={3} pr={40}>
    <Box width="16rem" display="flex" mr={[2, 2, 2, 3, 4]}>
      <ChannelHeaderLabel flex="1 1 auto" mr={[2]}>
        Channels
      </ChannelHeaderLabel>
      <ChannelHeaderLabel width={30} mr={2} centerText>
        Hit
      </ChannelHeaderLabel>
    </Box>
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
