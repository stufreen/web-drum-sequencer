import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box } from '../design-system';
import sampleOptions from '../../samples.config.json';
import theme from '../../styles/theme';
import { Knob } from '../Knob.component';

export const ChannelSelect = ({ onChange, onSetGain, channel }) => {
  const options = sampleOptions.map(sampleOption => ({
    value: sampleOption.url,
    label: sampleOption.name,
  }));
  const currentOption = options.find(option => channel.sample.url === option.value);
  return (
    <Box
      bg="darkGray"
      width="13rem"
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
            control: styles => ({
              ...styles,
              backgroundColor: theme.colors.nearBlack,
              border: 'none',
            }),
            singleValue: styles => ({
              ...styles,
              color: theme.colors.nearWhite,
            }),
          }}
        />
      </Box>
      <Knob size={40} value={channel.gain * 100} onChange={onSetGain} />
    </Box>
  );
};

ChannelSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSetGain: PropTypes.func.isRequired,
  channel: PropTypes.shape({
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
    sample: PropTypes.object.isRequired,
    gain: PropTypes.number.isRequired,
  }).isRequired,
};
