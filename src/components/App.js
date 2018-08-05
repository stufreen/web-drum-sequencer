import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import '../styles/index.css';
import {
  Heading,
  Box,
  Line,
  ChannelList,
  ChannelHeader,
  MasterControls,
} from '.';

const App = () => (
  <ThemeProvider theme={theme}>
    <Box className="App" p={5}>
      <Heading color="nearWhite" fontSize={7} fontWeight="500" mt={0} mb={3}>
        WDS-1
      </Heading>
      <Line bg="lightGray" mb={4} />
      <MasterControls />
      <ChannelHeader />
      <ChannelList />
    </Box>
  </ThemeProvider>
);

export default App;
