import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import * as R from 'ramda';
import theme from '../../styles/theme';
import { Box, Text } from '../design-system';
import { SavePresetModal } from '../SavePresetModal';

export const PresetSelectorComponent = ({
  onSelectPreset,
  presets,
  currentPreset,
  isEdited,
  userPresets,
}) => {
  const defaultPresetOptions = presets.map(preset => ({
    label: preset.name,
    value: preset,
  }));

  const userPresetOptions = userPresets.map(preset => ({
    label: preset.name,
    value: preset,
  }));

  const groupedOptions = [
    {
      label: 'Default',
      options: defaultPresetOptions,
    },
    {
      label: 'User',
      options: userPresetOptions,
    },
    {
      label: 'Memory',
      options: [
        {
          label: 'Save As...',
          value: 'SAVE_PRESET_AS',
        },
        {
          label: `Save “${currentPreset.name}”`,
          value: 'SAVE_PRESET',
          disabled: !isEdited || (defaultPresetOptions.find(
            option => option.label === currentPreset.name,
          ) !== undefined),
        },
        {
          label: `Delete “${currentPreset.name}”`,
          value: 'DELETE_PRESET',
          disabled: (defaultPresetOptions.find(
            option => option.label === currentPreset.name,
          ) !== undefined),
        },
      ],
    },
  ];

  let selectedOption = [...defaultPresetOptions, ...userPresetOptions].find(
    option => option.label === currentPreset.name,
  );
  if (isEdited && selectedOption) {
    selectedOption = R.clone(selectedOption);
    selectedOption.label += ' *';
  }

  return (
    <Box height="100%" position="relative">
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
        PRESETS
      </Text>
      <Select
        isEdited={isEdited}
        options={groupedOptions}
        onChange={onSelectPreset}
        value={selectedOption}
        aria-label="Select Preset"
        isOptionDisabled={({ value, disabled }) => {
          if (value === 'SAVE_PRESET') {
            return disabled;
          }
          if (value === 'DELETE_PRESET') {
            return disabled;
          }
          return false;
        }}
        isSearchable={false}
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
          }),
          option: styles => ({
            ...styles,
            padding: '0.4em 1em',
          }),
        }}
      />
      <SavePresetModal />
    </Box>
  );
};

PresetSelectorComponent.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  currentPreset: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onSelectPreset: PropTypes.func.isRequired,
  presets: PropTypes.arrayOf(PropTypes.object).isRequired,
  userPresets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
