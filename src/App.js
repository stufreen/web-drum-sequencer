import React, { Component } from "react";
import "./index.css";
import { PageTitle, ChannelList, PlayButton } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageTitle>Drumbox</PageTitle>
        <PlayButton />
        <ChannelList />
      </div>
    );
  }
}

export default App;