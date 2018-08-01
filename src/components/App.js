import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../css/theme';
import '../index.css';
import {
  Heading,
  Box,
  Line,
  ChannelList,
  PlayButton,
  BPMInput,
  ChannelHeader,
} from '.';

const App = () => (
  <ThemeProvider theme={theme}>
    <Box className="App" p={5}>
      <Heading color="nearWhite" fontSize={7} fontWeight="500" mt={0} mb={3}>
        WDS-1
      </Heading>
      <Line bg="lightGray" mb={4} />
      <Box mb={4} display="flex">
        <Box mr={3}>
          <PlayButton />
        </Box>
        <Box>
          <BPMInput />
        </Box>
      </Box>
      <ChannelHeader />
      <ChannelList />
    </Box>
  </ThemeProvider>
);

export default App;
