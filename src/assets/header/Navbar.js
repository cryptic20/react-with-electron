import React, { Component } from 'react';
import {Nav, Button, Glyphicon } from 'react-bootstrap';



class Navbar extends Component {
	constructor(props){
	super(props);
	this.state = {visible:true};
   this.eventHandler = this.eventHandler.bind(this);
}eventHandler(event){
      this.setState((prevState) => ({
        visible: !prevState.visible
      })
    )
}

  render() {
    return (
      <div className="wrapper">

    	<Nav id="sidebar">
      		<div id="dismiss">
                <Glyphicon glyph="arrow-left" />
            </div>


            <div className="sidebar-header">
                <h3>Collapsible Sidebar</h3>
                </div>
            

			<ul className="list-unstyled components">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
      
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </Nav>

            <div id="content">
            <Button id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.eventHandler}>{this.state.visible ? true : false}
                <Glyphicon glyph="align-left" />
                Toggle Sidebar
            </Button>
       	 </div>

        	<div className="overlay">
      		</div>
      </div>
    );
  }
}
export default Navbar;
