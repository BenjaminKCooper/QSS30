// I based this graph on the starter kit from: https://formidable.com/open-source/victory/guides/custom-charts
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import {MuiThemeProvider, TextField, RaisedButton, SelectField} from 'material-ui';

import {VictoryLine, VictoryLabel, VictoryAxis} from 'victory';
import { fetchGoogleTrends } from '../actions/index';

import TrendsCustomGraph from '../components/trendsCustomGraph'



// example class based component (smart component)
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {searchText:"", dropDownVal:""};
    this.searchGoogle=this.searchGoogle.bind(this);
    this.onTextChange=this.onTextChange.bind(this);

  }


  searchGoogle(){

    this.props.fetchGoogleTrends(this.state.searchText, this.props.data.trump[this.props.index].created);



  }

  onTextChange(event, value) {
    this.setState({searchText:value})
  }

  renderGoogleData(){
    if (!Array.isArray(this.props.tweets.googleData)) {
      // return(<div>{this.props.tweets.googleData.default.timelineData[0].value[0]}</div>)
      return(<div><TrendsCustomGraph data={this.props.tweets.googleData.default.timelineData} marker={this.props.data.trump[this.props.index].created}/></div>)
    } else {
      return(<div></div>)
    }

  }






  render() {

    return(

      <div className="dashMain">

        <MuiThemeProvider>
          <TextField onChange={this.onTextChange} hintText="Search Google Trends" />
        </MuiThemeProvider>
        <div>{"Retweets: " + this.props.data.trump[this.props.index].retweetCount}</div>
        <div>{"Favorited Count: " + this.props.data.trump[this.props.index].favoriteCount}</div>

        <button onClick={this.searchGoogle}>Search Google</button>
        {this.renderGoogleData()}
      </div>


    )

  }
}



const mapStateToProps = (state) => (
  {
    data: state.data,
    tweets: state.tweets,

  }
);

export default connect(mapStateToProps, {fetchGoogleTrends})(Dashboard);
