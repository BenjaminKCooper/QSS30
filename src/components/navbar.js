import React, { Component } from 'react';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="topBarHome">
        <MuiThemeProvider>
          <AppBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NavBar;
