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
        <div className="bottomBar"><div>Twitter Data collected from </div><a href="https://github.com/bpb27/political_twitter_archive/tree/master/realdonaldtrump">Github</a><div> and </div><a href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>Google Trends data from <a href="https://support.google.com/trends/answer/www.google.com/trends">Google Trends</a><div>All economic data is from</div><a href="https://www.quandl.com/">Quandl</a></div>
    </div>
  ); }
}

export default App;
