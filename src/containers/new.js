import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

// import marked from 'marked';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }


  onButtonPress(event) {
    console.log(this.state);
    this.props.createPost(this.state);
  }


  render() {
    return (
      <div className="postContainer">
        <input placeholder="Title" onChange={this.onTitleChange} />
        <input placeholder="Tags" onChange={this.onTagsChange} />
        <input placeholder="Content" onChange={this.onContentChange} />
        <button onClick={this.onButtonPress}>Create New Post</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => (
  {
    all: state.all,
    post: state.posts.all,
  }
);
export default connect(mapStateToProps, { createPost })(New); // / export functions where null is
