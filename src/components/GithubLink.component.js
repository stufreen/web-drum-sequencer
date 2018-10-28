import React from 'react';
import {
  Image,
  HoverLink,
  Text,
  Box,
} from './design-system';
import octocat from '../assets/images/github.svg';

export const GithubLink = () => (
  <HoverLink
    href="https://www.github.com/stufreen/web-drum-sequencer"
    description="Source code on Github"
    opacity={0.3}
    hoverOpacity={0.8}
    transitionSpeed="0.1s"
  >
    <Box display="flex" alignItems="center">
      <Text mr={2} color="white" fontWeight="600">
        Github
      </Text>
      <Image src={octocat} width="2rem" height="2rem" alt="Github Logo" />
    </Box>
  </HoverLink>
);
