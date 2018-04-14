import React, { Component } from 'react';
import './assets/css/default.css';
import WinMenu from './assets/header/windowMenu.js';
import Navbar from './assets/header/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <WinMenu/>
      <Navbar/>
      </div>
    );
  }
}

export default App;
