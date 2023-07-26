import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Box, ControlLabel } from '../design-system';
import sampleOptions from '../../samples.config';
import theme from '../../styles/theme';

const openFileInput = React.createRef();

const factoryOptions = sampleOptions.map(sampleOption => ({
  value: sampleOption.url,
  label: sampleOption.name,
}));

const getSampleSelectOptions = (userOptions = []) => {
  const groupedOptions = [
    {
      label: 'User',
      options: [
        {
          value: 'CHOOSE_FILE',
          label: 'Choose file...',
        },
        ...userOptions,
      ],
    },
    {
      label: '707',
      options: factoryOptions.filter(item => item.label.includes('707')),
    },
    {
      label: '808',
      options: factoryOptions.filter(item => item.label.includes('808')),
    },
    {
      label: 'Ace',
      options: factoryOptions.filter(item => item.label.includes('Ace')),
    },
    {
      label: 'LDrum',
      options: factoryOptions.filter(item => item.label.includes('LDrum')),
    },
    {
      label: 'Hip-hop',
      options: factoryOptions.filter(item => item.label.includes('Hip Hop')),
    },
  ];
  return groupedOptions;
};

export const SampleSelectComponent = ({
  onSelectSample,
  onSampleFileChosen,
  channel,
  userSamples,
}) => {
  const userOptions = userSamples.map(filename => ({
    value: filename,
    label: filename,
  }));
  const allOptions = userOptions.concat(factoryOptions);
  const currentOption = allOptions.find(option => channel.sample === option.value);
  return (
    <Box>
      <ControlLabel fontWeight="bold" mb={1} ml={1} textAlign="left">
        SAMPLE
      </ControlLabel>
      <Select
        aria-label="Select Channel"
        options={getSampleSelectOptions(userOptions)}
        onChange={(choice) => {
          if (choice.value === 'CHOOSE_FILE') {
            openFileInput.current.click();
          } else {
            onSelectSample(choice);
          }
        }}
        value={currentOption}
        isSearchable={false}
        styles={{
          container: styles => ({
            ...styles,
            height: '3rem',
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
      <input
        type="file"
        ref={openFileInput}
        style={{ display: 'none' }}
        onChange={onSampleFileChosen}
        accept="audio/*"
      />
    </Box>
  );
};

SampleSelectComponent.propTypes = {
  onSelectSample: PropTypes.func.isRequired,
  onSampleFileChosen: PropTypes.func.isRequired,
  channel: PropTypes.shape({
    sample: PropTypes.string,
    sampleLoaded: PropTypes.bool,
    id: PropTypes.string.isRequired,
  }).isRequired,
  userSamples: PropTypes.arrayOf(PropTypes.string).isRequired,
};
