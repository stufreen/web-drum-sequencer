import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '../design-system';
import sampleOptions from '../../samples.config.json';

export const ChannelSelect = ({ onChange, value }) => (
  <Box
    bg="darkGray"
    width="8rem"
    p={3}
    borderRadius="0.25rem"
    mr={4}
    display="flex"
    alignItems="center"
  >
    {/* <Text color="nearWhite" fontSize={2} fontWeight="600" flex="1 1 auto">
      {children}
    </Text> */}
    <select value={value} onChange={onChange}>
      {sampleOptions.map((sampleOption) => {
        return (
          <option value={sampleOption.url} key={sampleOption.url}>
            {sampleOption.name}
          </option>
        );
      })}
    </select>
  </Box>
);

ChannelSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
