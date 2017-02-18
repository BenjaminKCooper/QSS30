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


import {Chip, Slider, MuiThemeProvider, CircularProgress, Toggle, RaisedButton} from 'material-ui';


class Homepage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {tempSliderVal:0, finalSliderVal:0, viewToggle:"Graph"};
    // this.renderPosts = this.renderPosts.bind(this);
    this.onSliderMove = this.onSliderMove.bind(this);
    this.onSlideStop = this.onSlideStop.bind(this);
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


onSlideStop(event) {
  this.setState({finalSliderVal: this.state.tempSliderVal});
}

onSliderMove(event, value) {

  this.setState({tempSliderVal: value});

}

renderMain() {
  if (this.props.data.trump.length > 0) {

    return(
<div>
  <MuiThemeProvider>
    <RaisedButton label={this.state.viewToggle} />
  </MuiThemeProvider>
    <CustomGraph marker={this.props.data.trump[this.state.tempSliderVal].created} />
  <MuiThemeProvider>
    <Chip>{"Tweet Date: "+this.props.data.trump[this.state.tempSliderVal].created}</Chip>
  </MuiThemeProvider>
  <MuiThemeProvider>
  <Slider style={{width: 500}} axis="x-reverse" value={this.state.tempSliderVal} onDragStop={this.onSlideStop} onChange={this.onSliderMove} defaultValue={0} max={this.props.data.trump.length - 1} min={0} step={1} />
  </MuiThemeProvider>
</div>



)


  } else {
    return (<MuiThemeProvider><CircularProgress /></MuiThemeProvider>);
  }

}


  render() {
    return (
      <div className="mainPageCenter">

        <div id="mainContent">
          {this.renderMain()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    data: state.data,
  }
);

export default connect(mapStateToProps, { fetchchina, fetchdowjones, fetcheuro, fetchfox, fetchmexico, fetchnasdaq, fetchnpr, fetchnyt, fetchpound, fetchtrump, fetchwsj })(Homepage);
