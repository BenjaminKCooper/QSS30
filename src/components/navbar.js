import React, { Component } from 'react';

import { Link } from 'react-router';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="topBarHome">
        <Link to="/">BenBlog</Link>
        <Link to="posts/new">new post</Link>
      </div>
    );
  }
}

export default NavBar;
