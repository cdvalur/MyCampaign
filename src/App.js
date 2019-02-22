import React, { Component } from 'react';
import CampaignsListContainer from './CampaignsListContainer/CampaignsListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="campaignsContainer">
        <CampaignsListContainer></CampaignsListContainer>
        </div>
      </div>
    );
  }
}

export default App;
