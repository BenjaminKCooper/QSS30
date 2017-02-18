import React, { Component } from 'react';

import { Link } from 'react-router';



// example class based component (smart component)
class QuickTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
        {this.props.tweet}
      </div>
    );
  }
}

export default QuickTweet;
