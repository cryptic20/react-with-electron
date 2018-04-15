import React, { Component } from 'react';
import { OverlayTrigger,Tooltip,ButtonToolbar, Button } from 'react-bootstrap';
const remote = window.require('electron').remote; 
const win = remote.getCurrentWindow();

class WinMenu extends Component {
  constructor(props){
    super(props);
    this.state = {toggle:true};
    this.eventHandler = this.eventHandler.bind(this);
  }

  toggle_full_screen(bool){
    win.setFullScreen(bool);
  }

  toggle_tooltip(flag){
    return (flag ? "enter" : "exit");
  }
    eventHandler(event){
      this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    )
}

  close_program = () => {
  win.close();
   };

  minimize_program = () => {
  win.minimize();
  };

  render() {

     const Tooltip_full_mode = (
      <Tooltip id="tooltip-full-screen">
      <strong>{this.toggle_tooltip(this.state.toggle)} full screen</strong>
      </Tooltip>
      );

    const Quit = (
  <Tooltip id="tooltip-quit">
    <strong>Quit</strong>
  </Tooltip>
  );

    const hide = (
  <Tooltip id="tooltip-hide">
    <strong>Minimize</strong>
  </Tooltip>
  );

    return (
      <div className="WinMenu">
      <header>
      <img className="headerAppLogo" src={require('../../icons/logo.svg')} alt="app logo"/>
        <ButtonToolbar className="menuButton">
          <OverlayTrigger placement="bottom" overlay={hide}>
          <Button bsStyle="warning" bsSize="small" onClick={this.minimize_program}></Button>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={Tooltip_full_mode}>
          <Button bsStyle="success" bsSize="small" onClick={this.eventHandler}>{this.state.toggle ? this.toggle_full_screen(false) : this.toggle_full_screen(true)}</Button>
           </OverlayTrigger>

           <OverlayTrigger placement="bottom" overlay={Quit}>
          <Button bsStyle="danger" bsSize="small" onClick={this.close_program}></Button>
          </OverlayTrigger>

        </ButtonToolbar>
      </header>
      </div>
    );
  }
}

export default WinMenu;
