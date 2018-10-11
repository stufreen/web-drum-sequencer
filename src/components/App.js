import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import globalStyles from '../styles/globalStyles';
import {
  Box,
  Line,
  ChannelList,
  ChannelHeader,
  ChannelControls,
  MasterControls,
  Logo,
  GithubLink,
  FlashMessage,
} from '.';

globalStyles();

const App = () => (
  <ThemeProvider theme={theme}>
    <Box
      className="App"
      position="relative"
      p={[0, 0, 0, 1, 2, 2, 2, 3, 5]}
      pt={[4, 4, 4, 4, 4, 4, 4, 4, 5]}
    >
      <header>
        <Logo color="white" width="200px" />
        <Line bg="lightGray" mb={4} mt={4} />
      </header>
      <main>
        <MasterControls />
        <ChannelControls />
        <ChannelHeader />
        <ChannelList />
      </main>
      <footer>
        <Box position="absolute" bottom={0} right={0} mr={[0, 0, 0, 1, 2, 2, 2, 3, 5]}>
          <GithubLink />
        </Box>
      </footer>
      <FlashMessage />
    </Box>
  </ThemeProvider>
);

export default App;
