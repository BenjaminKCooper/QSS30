import React, { Component } from 'react';
import Immutable from 'immutable';
import SearchBar from './searchBar';
import Note from './note';
import DashInstance from './dashInstance';


// var Twitter = require('twitter-node-client').Twitter;






const uuid = require('uuid'); // I learned how to implement a uuid from : https://www.npmjs.com/package/uuid


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
    };
    this.createNode = this.createNode.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.updatePostion = this.updatePostion.bind(this);
    this.editChangeText = this.editChangeText.bind(this);
  }


  onDeleteClick(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }


  createNode(text) {
    const id = uuid.v1();
    const note = {
      title: text,
      text: '',
      x: 400,
      y: 12,
      zIndex: 26,
    };

    this.setState({
      notes: this.state.notes.set(id, note),
    });
  }

  editChangeText(id, newText) {
    console.log(newText + 1);
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { text: newText }); }),
    });
  }

  updatePostion(id, newX, newY) {
    console.log(newX);
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { x: newX, y: newY }); }),
    });
  }


  render() {
    console.log(window.innerWidth)
    return (
      <div>
        <div>{process.env.TEST}</div>
        <div>{process.env.TEST_TWO}</div>
        <div>{process.env.TEST_THREE}</div>
        <SearchBar onButtonPress={this.createNode} />
        <DashInstance month={1} day={14} year={2017} />
      </div>
    );
  }
}

export default App;


// FOR RENDER FUNCTION...
// {this.state.notes.entrySeq().map(([id, note]) => {
//   return <Note key={id} id={id} note={note} updatePostion={this.updatePostion} editChangeText={this.editChangeText} onDeleteClick={this.onDeleteClick} />;
// })}
