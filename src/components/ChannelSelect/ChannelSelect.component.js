import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box, Text } from '../design-system';
import sampleOptions, { getSampleSelectOptions } from '../../samples.config';
import theme from '../../styles/theme';

export const ChannelSelectComponent = ({ onSelectSample, channel }) => {
  const options = sampleOptions.map(sampleOption => ({
    value: sampleOption.url,
    label: sampleOption.name,
  }));
  const currentOption = options.find(option => channel.sample.url === option.value);
  return (
    <Box flex="1 1 auto" height="3rem" position="relative">
      <Box height="100%">
        <Text
          position="absolute"
          left="0.5rem"
          top="-0.6em"
          color="gray"
          fontSize="0.6rem"
          fontWeight="600"
          bg="nearBlack"
          pl={1}
          pr={1}
          letterSpacing="0.1em"
          zIndex={1}
          borderRadius="3px"
        >
          SAMPLE
        </Text>
        <Select
          aria-label="Select Channel"
          options={getSampleSelectOptions()}
          onChange={onSelectSample}
          value={currentOption}
          styles={{
            container: styles => ({
              ...styles,
              height: '100%',
            }),
            control: styles => ({
              ...styles,
              backgroundColor: 'black',
              border: `2px solid ${theme.colors.steel}`,
              height: '100%',
              borderRadius: '0.5em',
            }),
            singleValue: styles => ({
              ...styles,
              color: theme.colors.nearWhite,
              opacity: channel.sampleLoaded ? 1 : 0.3,
            }),
            menu: styles => ({
              ...styles,
              fontSize: '0.8rem',
              width: '16rem',
            }),
            option: styles => ({
              ...styles,
              paddingTop: '0.2em',
              paddingBottom: '0.2em',
            }),
          }}
        />
      </Box>
    </Box>
  );
};

ChannelSelectComponent.propTypes = {
  onSelectSample: PropTypes.func.isRequired,
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
