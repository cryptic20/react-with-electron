import React, { Component } from 'react';
import './assets/css/default.css';
import WinMenu from './assets/components/header/windowMenu.js';
import Navbar from './assets/components/header/Navbar.js';
import Body from './assets/components/body/body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <WinMenu/>
      <Navbar/>
      <Body/>
      </div>
    );
  }
}

export default App;
