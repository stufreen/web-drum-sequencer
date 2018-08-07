import React from 'react';
import * as R from 'ramda';
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
        color="gray"
        fontSize="0.6em"
        fontWeight="bold"
        m={0}
      >
        {buttonNumber + 1}
      </Text>
    </Box>
  ));

  return (
    <Box
      display="flex"
      border="2px solid"
      borderColor="steel"
      borderRadius="0.5rem"
      p={3}
      pb={2}
      position="relative"
    >
      <Text
        position="absolute"
        left="1rem"
        top="-0.6em"
        color="gray"
        fontSize="0.6rem"
        fontWeight="600"
        bg="nearBlack"
        pl={1}
        pr={1}
      >
        PATTERNS
      </Text>
      {buttons}
    </Box>
  );
};
