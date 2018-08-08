import React from 'react';
import * as R from 'ramda';
import { LabelBox } from '../LabelBox';
import { Box, HoverButton, Text } from '../design-system';

export const PatternSelector = () => {
  const buttons = R.range(0, 8).map(buttonNumber => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      mr={1}
      key={`preset-${buttonNumber}`}
    >
      <HoverButton
        p={0}
        height="1.3rem"
        width="1.3rem"
        borderRadius={3}
        bg="lightGray"
        mb={1}
      />
      <Text
        color="steel"
        fontSize="0.6em"
        fontWeight="600"
        m={0}
      >
        {buttonNumber + 1}
      </Text>
    </Box>
  ));

  return (
    <LabelBox label="PATTERNS">
      {buttons}
    </LabelBox>
  );
};
