import React, { Component } from "react";
import "./index.css";
import { PageTitle, ChannelList, PlayButton, BPMInput, Marker } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageTitle>Drumbox</PageTitle>
        <PlayButton />
        <BPMInput />
        <div className="flex">
          <div className="w4 h2 pa2" />
          <Marker progress={0.2} />
        </div>
        <ChannelList />
      </div>
    );
  }
}

export default App;