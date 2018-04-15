'use strict';

import React, { Component } from 'react';
import ThemeLight from './theme-light';
import ThemeDark from './theme-dark';

class Theme extends Component {

static propTypes = {
	theme: propTypes.string.isRequired,
	};

  render() {
    switch(this.props.theme){
    	case 'light':
    	return <ThemeLight />
    	case 'dark':
    	return <ThemeDark />
    	default:
    	return <ThemeLight />
    }
  }
}

export default Theme;
