import React, { Component } from 'react';

import NavBar from './navbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
// example class based component (smart component)
  render() {
    return (
    <div className="test">
        <div className="navBarContainer">
          <NavBar />
        </div>
        <div className="mainApp">
          {this.props.children}
        </div>
        <div className="bottomBar" />
    </div>
  ); }
}

export default App;
