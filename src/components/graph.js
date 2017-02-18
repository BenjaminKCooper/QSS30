import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as V from 'victory';

import MetricsGraphics from 'react-metrics-graphics';





// example class based component (smart component)
class DataGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log(this.props.marker)


  }




  render() {
    return (
      <div>

        <V.VictoryChart>
          <V.VictoryLine
          data={this.props.data.dowJones}
          style={{
            data: {stroke: "#e95f46"}
          }}

          x={(data)=>(new Date(data.Date.slice(0,8)))}
          y="Value"
        />

        <V.VictoryLine
    data={[
      {x: this.props.marker,y:7000},{x: this.props.marker,y:15000}
    ]}
    x={(datum) => new Date(datum.x)}
    y={(datum) => datum.y} />


      </V.VictoryChart>


      </div>
    );
  }
}



const mapStateToProps = (state) => (
  {
    data: state.data,
  }
);

export default connect(mapStateToProps)(DataGraph);
