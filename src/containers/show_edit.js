import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchpost, updatePost } from '../actions/index';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';


// import marked from 'marked';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { title: '', tags: '', content: '', editingTitle: false, editingTags: false, editingContent: false };
    this.onDeleteButtonPress = this.onDeleteButtonPress.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.editCheckTitle = this.editCheckTitle.bind(this);
    this.editCheckTags = this.editCheckTags.bind(this);
    this.editCheckContent = this.editCheckContent.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
    // this.updateLocalPost();
  }
  // this.props.params.id

  onDeleteButtonPress(event) {
    this.props.deletePost(this.props.params.id);
  }

  // if (this.state.editingTitle) {
  //   this.state.setState({ editingTitle: false });
  // } else {
  //   this.state.setState({ editingTitle: true });
  // }


  editCheckTitle() {
    if (this.state.editingTitle) {
      const newState = { title: this.state.title, tags: this.props.post.tags, content: this.props.post.content };
      console.log(newState);
      this.props.updatePost(this.props.params.id, newState);
    }
    this.setState({ editingTitle: !this.state.editingTitle });
  }

  editCheckTags() {
    if (this.state.editingTags) {
      const newState = { title: this.props.post.title, tags: this.state.tags, content: this.props.post.content };
      console.log(newState);
      this.props.updatePost(this.props.params.id, newState);
    }
    this.setState({ editingTags: !this.state.editingTags });
  }

  editCheckContent() {
    if (this.state.editingContent) {
      const newState = { title: this.props.post.title, tags: this.props.post.tags, content: this.state.content };
      console.log(newState);
      this.props.updatePost(this.props.params.id, newState);
    }
    this.setState({ editingContent: !this.state.editingContent });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  renderContent() {
    if (this.state.editingContent) {
      return <Textarea onChange={this.onContentChange} />;
    } else {
      return <div id="markedDiv" dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />;
    }
  }

  renderTags() {
    if (this.state.editingTags) {
      return <Textarea onChange={this.onTagsChange} />;
    } else {
      return <div id="markedDiv" dangerouslySetInnerHTML={{ __html: marked(this.props.post.tags || '') }} />;
    }
  }

  renderTitle() {
    if (this.state.editingTitle) {
      return <Textarea onChange={this.onTitleChange} />;
    } else {
      return <div id="markedDiv" dangerouslySetInnerHTML={{ __html: marked(this.props.post.title || '') }} />;
    }
  }

  render() {
    if (!this.props.post) {
      return <div>loading post...</div>;
    }
    return (
      <div className="editMain">
        <div className="editAreas">
          <div className="subEditArea">
            <h>Title: </h>
            {this.renderTitle()}
            <button type="submit" onClick={this.editCheckTitle} >Edit Title</button>
          </div>
          <div className="subEditArea">
            <h>Tags: </h>
            {this.renderTags()}
            <button type="submit" onClick={this.editCheckTags} >Edit Tags</button>
          </div>
          <div className="subEditArea">
            <h>Content: </h>
            {this.renderContent()}
            <button type="submit" onClick={this.editCheckContent} >Edit Content</button>
          </div>
        </div>
        <div>
          <button type="submit" onClick={this.onDeleteButtonPress} >DELETE</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);
export default connect(mapStateToProps, { updatePost, deletePost, fetchpost })(Show); // / export functions where null is
