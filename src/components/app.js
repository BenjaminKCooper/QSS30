import React, { Component } from 'react';
import axios from 'axios';
import Immutable from 'immutable';
import SearchBar from './searchBar';
import Note from './note';
import DashInstance from './dashInstance';
import GraphView from './graphView';
import update from 'react-addons-update';
import { Button, Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';






//Callback functions
// var error = function (err, response, body) {
//        console.log('ERROR [%s]', err);
//    };
// var success = function (data) {
//       //  console.log('Data [%s]', data);
//       let all_tweets = JSON.parse(data);
//       for(var tweet in all_tweets.statuses) {
//         console.log(all_tweets.statuses[tweet]);
//       }
//    };





const uuid = require('uuid'); //


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardView: false,
      dataSources: Immutable.fromJS({
        china : {
          fileName: "china_current.json",
          displayTitle: "Chinese Yuan",
          jsonData: {},
        },
        dowJones: {
          fileName: "dowjones_current.json",
          displayTitle: "Dow Jones Industrial Average",
          jsonData: {},
        },
        euro: {
          fileName: "euro_current.json",
          displayTitle: "The Euro",
          jsonData: {},
        },
        fox: {
          fileName: "fox_current.json",
          displayTitle: "Fox News Twitter",
          jsonData: {},
        },
        mexico: {
          fileName: "mexico_current.json",
          displayTitle: "Mexican Peso",
          jsonData: {},
        },
        nasdaq: {
          fileName: "nasdaq_current.json",
          displayTitle: "NASDAQ",
          jsonData: {},
        },
        npr: {
          fileName: "npr_current.json",
          displayTitle: "National Public Radio Twitter",
          jsonData: {},
        },
        nyt: {
          fileName: "nyt_current.json",
          displayTitle: "New York Times Twitter",
          jsonData: {},
        },
        pound: {
          fileName: "pound_current.json",
          displayTitle: "British Pound",
          jsonData: {},
        },
        trump: {
          fileName: "trump_current.json",
          displayTitle: "Donald Trump's Twitter",
          jsonData: {},
        },
        wsj: {
          fileName: "wsj_current.json",
          displayTitle: "Wall Street Journal Twitter",
          jsonData: {},
        },
      }),
      notes: Immutable.Map(),

    };
    this.createNode = this.createNode.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.updatePostion = this.updatePostion.bind(this);
    this.editChangeText = this.editChangeText.bind(this);
    this.getData = this.getData.bind(this);
    this.switchView = this.switchView.bind(this);


    this.getData();

  }


  getData(){
    console.log('mounted')




    this.state.dataSources.entrySeq().forEach((source)=>{

      axios.get(("../../data/" + source[1].get("fileName"))).then((data) => {
        this.setState({
          dataSources: this.state.dataSources.setIn([source[0],'jsonData'], data)
        })
      })
    })
  }







  onDeleteClick(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }


  createNode(text) {
    console.log(this.state.dataSources.getIn(['china','json']))

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

  renderMain(){
    if (this.state.dashboardView) {
      return <DashInstance month={1} day={14} year={2017} />
    }
    else {
      return <GraphView />
    }

  }

  switchView(){
    this.setState({
      dashboardView: !this.state.dashboardView,
    })

  }


  render() {
    console.log(this.state.dashboardView)
    return (
      <div>
        <Button onClick={this.switchView}>Switch View</Button>
        {/* <SearchBar onButtonPress={this.createNode} /> */}

        {this.renderMain()}






      </div>
    );
  }
}

export default App;


// FOR RENDER FUNCTION...
// {this.state.notes.entrySeq().map(([id, note]) => {
//   return <Note key={id} id={id} note={note} updatePostion={this.updatePostion} editChangeText={this.editChangeText} onDeleteClick={this.onDeleteClick} />;
// })}
