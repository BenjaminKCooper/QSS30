import React, { Component } from 'react';
import { connect } from 'react-redux';
import {PulseLoader} from 'halogen';
// import Welcome from './welcome';
// import NavBar from './navbar';
import { Link } from 'react-router';
import { fetchchina, fetchdowjones, fetcheuro, fetchfox, fetchmexico, fetchnasdaq, fetchnpr, fetchnyt, fetchpound, fetchtrump, fetchwsj } from '../actions/index';
// example class based component (smart component)


import { LineChart, Line } from 'recharts';


import * as V from 'victory';

class Homepage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    // this.renderPosts = this.renderPosts.bind(this);
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


renderMain() {
  if (this.props.data.trump.length != 0) {

    return(

      this.props.data.trump.map((tweet)=>{
        return(<li>{tweet.text}</li>)

          })



    )
  } else {
    return (<div><PulseLoader></PulseLoader></div>);
  }

}


  render() {
    return (
      <div className="mainPageCenter">
        <div >
          {this.renderMain()}
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => (
  {
    data: state.data,
  }
);

export default connect(mapStateToProps, { fetchchina, fetchdowjones, fetcheuro, fetchfox, fetchmexico, fetchnasdaq, fetchnpr, fetchnyt, fetchpound, fetchtrump, fetchwsj })(Homepage);
