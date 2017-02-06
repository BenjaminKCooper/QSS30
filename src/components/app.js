import React, { Component } from 'react';
import axios from 'axios';
import Immutable from 'immutable';
import SearchBar from './searchBar';
import Note from './note';
import DashInstance from './dashInstance';





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


    // this.getData();



  }


  componentDidMount(){
    console.log('mounted')

    console.log(this.state.dataSources)


    var _this = this;

    this.state.dataSources.entrySeq().forEach(function(key){

      _this.setState({
        dataSources: this.state.dataSources.update(key, value => {
          console.log(value)
        }))
      }
    })



    // var _this = this;
    //
    // for (var key in this.state.dataSources) {
    //
    //   axios.get(("../../data/" + this.state.dataSources[key].fileName)).then(function(data) {
    //
    //
    //   })
    //
    //
    // }


    // axios.get("../../data/trump_current.json").then(function(result) {
    //   _this.setState({
    //     twitterData: {result}
    //   })
    // });






  }

  componentWillUnmount(){
    console.log("COMPONENTWILLUNMOUNT!")
    // this.serverRequest.abort();
  }


  getData(){
    console.log('getting data')


    axios.get("../../data/trump_current.json").then(function(result){
      console.log(result.data);
      var test = result.data;
      this.updateData(test);


    });
    console.log(2)


    console.log(this.state.twitterData)

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
