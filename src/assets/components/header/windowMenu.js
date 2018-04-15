import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
const remote = window.require('electron').remote;
const win = remote.getCurrentWindow();

class WinMenu extends Component {
//   constructor(props){
//     super(props);
//     this.state = {toggle:true};
//     this.eventHandler = this.eventHandler.bind(this);
//   }

//   eventHandler(event){
//       this.setState((prevState) => ({
//         toggle: !prevState.toggle
//       })
//     );
// }

  full_screen_mode = () => {
    if(win.isFullScreen()){ //if screen is full
      win.setFullScreen(false);
      console.log('window is small screen');
    }else{
      win.setFullScreen(true);
      console.log('window is now full screen');
    };

  };

  close_program = () => {
  win.close();
   };

  minimize_program = () => {
  win.minimize();
  };

  render() {
    return (
      <div className="WinMenu">
      <header>
      <img className="headerAppLogo" src={require('../../icons/logo.svg')} alt="app logo"/>
        <ButtonToolbar className="menuButton">
          <Button bsStyle="warning" bsSize="small" onClick={this.minimize_program}></Button>
          <Button bsStyle="success" bsSize="small" onClick={this.full_screen_mode}></Button>
          <Button bsStyle="danger" bsSize="small" onClick={this.close_program}></Button>
        </ButtonToolbar>
      </header>
      </div>
    );
  }
}

export default WinMenu;
