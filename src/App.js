import React, { Component } from "react";
import "./index.css";
import { PageTitle, ChannelList } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageTitle>Drum Machine</PageTitle>
        <ChannelList />
      </div>
    );
  }
}

export default App;