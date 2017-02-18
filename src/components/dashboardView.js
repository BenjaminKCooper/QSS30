// I based this graph on the starter kit from: https://formidable.com/open-source/victory/guides/custom-charts
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import {MuiThemeProvider, TextField, RaisedButton} from 'material-ui';

import {VictoryLine, VictoryLabel, VictoryAxis} from 'victory';
import { fetchGoogleTrends } from '../actions/index';

import TrendsCustomGraph from '../components/trendsCustomGraph'



// example class based component (smart component)
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchGoogle=this.searchGoogle.bind(this);

  }


  searchGoogle(){

    this.props.fetchGoogleTrends("trump", this.props.data.trump[this.props.index].created);

    console.log(this.props.data.trump)


  }

  onTextChange(event, value) {
    console.log(value)
  }

  renderGoogleData(){
    console.log(this.props.tweets)
    if (!Array.isArray(this.props.tweets.googleData)) {
      console.log(this.props.tweets.googleData)
      return(<div>{this.props.tweets.googleData.default.timelineData[0].value[0]}</div>)
    } else {
      return(<div></div>)
    }

  }






  render() {

    return(

      <div className="dashMain">
        <h>{"Tweet: "+this.props.data.trump[this.props.index].label}</h>
        <MuiThemeProvider>
          <TextField onChange={this.onTextChange} hintText="Search Google Trends" />
        </MuiThemeProvider>



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
