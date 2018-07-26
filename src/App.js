import React from 'react';
import './index.css';
import {
  PageTitle,
  ChannelList,
  PlayButton,
  BPMInput,
  Marker,
} from './components';

const App = () => (
  <div className="App">
    <PageTitle>
      Drumbox
    </PageTitle>
    <PlayButton />
    <BPMInput />
    <Marker progress={0.2} />
    <ChannelList />
  </div>
);

export default App;
