import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box } from '../design-system';
import sampleOptions from '../../samples.config.json';

export const ChannelSelect = ({ onChange, value }) => {
  const options = sampleOptions.map(sampleOption => ({
    value: sampleOption.url,
    label: sampleOption.name,
  }));
  const currentOption = options.find(option => value === option.value);
  return (
    <Box
      bg="darkGray"
      width="15rem"
      p={2}
      borderRadius="0.25rem"
      mr={4}
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Box flex="1 1 auto" pr={2}>
        <Select
          options={options}
          onChange={onChange}
          value={currentOption}
          styles={{
            control: styles => ({ ...styles, backgroundColor: 'black', border: 'none' }),
            singleValue: styles => ({ ...styles, color: 'white' }),
          }}
        />
      </Box>
      <webaudio-knob src="/assets/images/simplegray.png" sprites="100" min="0" max="100" width="40" height="40" />
    </Box>
  );
};

ChannelSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
