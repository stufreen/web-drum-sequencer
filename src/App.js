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
  <div className="App pa5">
    <PageTitle>
      WDS-1
    </PageTitle>
    <div className="flex mv4">
      <PlayButton />
      <BPMInput />
    </div>
    <Marker progress={0.2} />
    <ChannelList />
  </div>
);

export default App;
