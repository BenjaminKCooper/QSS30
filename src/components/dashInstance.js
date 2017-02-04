import React, { Component } from 'react';
import Draggable from 'react-draggable'; // , { DraggableCore }
import marked from 'marked';
import Textarea from 'react-textarea-autosize';

class DashInstance extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  onEditClick(event) { // CHANGES THIS TO BE PRETTIER!!!! YOU MAKE MAKE IT LIKE ONE LINE
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  }


  onDeleteClick(event) {
    this.props.onDeleteClick(this.props.id);
  }


  onTextChange(event) {
    console.log(event.target.value);
    this.props.editChangeText(this.props.id, event.target.value);
  }

  onDrag(e, ui) {
    this.props.updatePostion(this.props.id, ui.x, ui.y);
  }

  renderTextArea() {
    if (this.state.isEditing) {
      return <Textarea id="textareaDiv" className="noteMD" onChange={this.onTextChange} value={this.props.note.text} />;
    } else {
      return <div id="markedDiv" className="noteMD" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
    }
  }

  renderEdit() {
    if (this.state.isEditing) {
      // this.setState({ isEditing: true });
      return <i onClick={this.onEditClick} className="fa fa-check-square" aria-hidden="true"></i>;
    } else {
      // this.setState({ isEditing: false });
      return <i onClick={this.onEditClick} className="fa fa-pencil-square-o" aria-hidden="true"></i>;
    }
  }


  render() {
    return (

        <div>
          <div>{this.props.day}</div>
        </div>
    ); }
}

export default DashInstance;