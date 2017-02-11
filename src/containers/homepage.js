import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Welcome from './welcome';
// import NavBar from './navbar';
import { Link } from 'react-router';
import { fetchchina, fetchdowjones, fetcheuro, fetchfox, fetchmexico, fetchnasdaq, fetchnpr, fetchnyt, fetchpound, fetchtrump, fetchwsj } from '../actions/index';
// example class based component (smart component)
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
    console.log(this.props.data)
    // return this.props.posts.map((post) => {
    //   return <Link className="postContainer"to={`/posts/${post.id}`} key={post.id}><div className="linkText">{post.title} </div></Link>;
    // });
  }

  render() {
    return (
      <div className="mainPageCenter">
        <div >
          {this.renderPosts()}
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
