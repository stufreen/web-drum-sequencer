import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './css/theme';
import './index.css';
import {
  Heading,
  Box,
  ChannelList,
  PlayButton,
  BPMInput,
  Marker,
} from './components';

const App = () => (
  <ThemeProvider theme={theme}>
    <Box className="App" p={4}>
      <Heading color="nearWhite" fontSize={7} fontWeight="500" mt={0}>
        WDS-1
      </Heading>
      <div className="flex mv4">
        <PlayButton />
        <BPMInput />
      </div>
      <Marker progress={0.2} />
      <ChannelList />
    </Box>
  </ThemeProvider>
);

export default App;
