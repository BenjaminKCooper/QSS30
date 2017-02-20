import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Welcome from './welcome';
// import NavBar from './navbar';
import { Link } from 'react-router';
import QuickTweet from '../components/quickTweetView'
import { fetchchina, fetchdowjones, fetcheuro, fetchfox, fetchmexico, fetchnasdaq, fetchnpr, fetchnyt, fetchpound, fetchtrump, fetchwsj } from '../actions/index';
// example class based component (smart component)

import DataGraph from '../components/graph'
import CustomGraph from '../components/customGraph'

import Dashboard from '../components/dashboardView'


import {Chip, Slider, MuiThemeProvider, CircularProgress, Toggle, RaisedButton, DropDownMenu, MenuItem} from 'material-ui';


class Homepage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {tempSliderVal:0, finalSliderVal:0, viewToggle:"Graph", dropdownVal:1, dropdownText:"DowJones"};

    this.onSliderMove = this.onSliderMove.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.canSwitchTweetNext = this.canSwitchTweetNext.bind(this);
    this.canSwitchTweetPrev = this.canSwitchTweetPrev.bind(this);
    this.dropdownChange = this.dropdownChange.bind(this);

  }

  componentWillMount() {
    this.props.fetchchina();
    this.props.fetchdowjones();
    this.props.fetcheuro();
    this.props.fetchfox();
    this.props.fetchmexico();
    this.props.fetchnasdaq();
    this.props.fetchnpr();
    this.props.fetchnyt();
    this.props.fetchpound();
    this.props.fetchtrump();
    this.props.fetchwsj();
  }



  renderPosts() {

    // return this.props.posts.map((post) => {
    //   return <Link className="postContainer"to={`/posts/${post.id}`} key={post.id}><div className="linkText">{post.title} </div></Link>;
    // });
  }


onButtonClick(event) {
  if (this.state.viewToggle == "Graph") {
    this.setState({viewToggle:"Dashboard"})
  } else {
    this.setState({viewToggle:"Graph"})
  }
}

dropdownChange(event, index, value) {
  this.setState({dropdownVal:value})

  let typeList = ["DowJones", "Chinese Yuan", "Mexican Peso", "The Euro", "The Pound"]
  this.setState({dropdownText:typeList[index]})

}

onSliderMove(event, value) {

  this.setState({tempSliderVal: value});

}

onPrevClick(event) {
  this.setState({tempSliderVal:this.state.tempSliderVal + 1})
}


onNextClick(event) {
  this.setState({tempSliderVal:this.state.tempSliderVal - 1})
}

canSwitchTweetPrev() {
  if ((this.state.tempSliderVal + 1 == (this.props.data.trump.length))){
    return(true)

  } else {
    return(false)
  }
}

canSwitchTweetNext(){
  console.log(this.state.tempSliderVal)

  if ((this.state.tempSliderVal - 1) < 0){
    return(true)

  } else {
    return(false)
  }
}


renderMain() {
  if (this.props.data.trump.length > 0) {

    if (this.state.viewToggle == "Graph") {
      return(
  <div id="graphContainer">
    <MuiThemeProvider >
      <RaisedButton onTouchTap={this.onButtonClick} label={this.state.viewToggle} />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <Chip>{"Tweet Text: "+this.props.data.trump[this.state.tempSliderVal].label}</Chip>
    </MuiThemeProvider>
      <CustomGraph dataType={this.state.dropdownText} marker={this.props.data.trump[this.state.tempSliderVal].created} />
    <MuiThemeProvider>
      <Chip>{"Tweet Date: "+this.props.data.trump[this.state.tempSliderVal].created}</Chip>
    </MuiThemeProvider>
    <MuiThemeProvider>
    <Slider style={{width: 500}} axis="x-reverse" value={this.state.tempSliderVal} onDragStop={this.onSlideStop} onChange={this.onSliderMove} defaultValue={0} max={this.props.data.trump.length - 1} min={0} step={1} />
    </MuiThemeProvider>

    <MuiThemeProvider >
      <RaisedButton disabled={this.canSwitchTweetPrev()} onTouchTap={this.onPrevClick} label="Previous Tweet" />
    </MuiThemeProvider>
    <MuiThemeProvider >
      <RaisedButton disabled={this.canSwitchTweetNext()} onTouchTap={this.onNextClick} label="Next Tweet" />
    </MuiThemeProvider>

    <MuiThemeProvider>
      <DropDownMenu value={this.state.dropdownVal} onChange={this.dropdownChange}>
          <MenuItem value={1} primaryText="DowJones" />
          <MenuItem value={2} primaryText="Chinese Yuan" />
          <MenuItem value={3} primaryText="Mexican Peso" />
          <MenuItem value={4} primaryText="The Euro" />
          <MenuItem value={5} primaryText="The Pound" />
        </DropDownMenu>
    </MuiThemeProvider>

  </div>



  )

    } else {

      return(
        <div id="dashboardContainer">

          <MuiThemeProvider >
            <RaisedButton onTouchTap={this.onButtonClick} label={this.state.viewToggle} />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <Chip>{"Tweet Text: "+this.props.data.trump[this.state.tempSliderVal].label}</Chip>
          </MuiThemeProvider>
          <Dashboard index={this.state.tempSliderVal}/>

          <MuiThemeProvider>
            <Chip>{"Tweet Date: "+this.props.data.trump[this.state.tempSliderVal].created}</Chip>
          </MuiThemeProvider>

          <MuiThemeProvider >
            <RaisedButton disabled={this.canSwitchTweetPrev()} onTouchTap={this.onPrevClick} label="Previous Tweet" />
          </MuiThemeProvider>
          <MuiThemeProvider >
            <RaisedButton disabled={this.canSwitchTweetNext()} onTouchTap={this.onNextClick} label="Next Tweet" />
          </MuiThemeProvider>


      </div>)

    }




  } else {
    return (<MuiThemeProvider><CircularProgress /></MuiThemeProvider>);
  }

}


  render() {
    return (
      <div className="mainPageCenter">
          {this.renderMain()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    data: state.data,
    tweets: state.tweets,
  }
);

export default connect(mapStateToProps, { fetchchina, fetchdowjones, fetcheuro, fetchfox, fetchmexico, fetchnasdaq, fetchnpr, fetchnyt, fetchpound, fetchtrump, fetchwsj })(Homepage);
