// I based this graph on the starter kit from: https://formidable.com/open-source/victory/guides/custom-charts
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {VictoryLine, VictoryLabel, VictoryAxis} from 'victory';





// example class based component (smart component)
class CustomGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getDataTypes=this.getDataTypes.bind(this);
    this.getDomainX = this.getDomainX.bind(this);
    this.getDomainY = this.getDomainY.bind(this);
    this.getX = this.getX.bind(this);
    this.getY = this.getY.bind(this);
  }




    getTickValues() {
      return [
        new Date(2009, 1, 1),
        new Date(2010, 1, 1),
        new Date(2011, 1, 1),
        new Date(2012, 1, 1),
        new Date(2013, 1, 1),
        new Date(2014, 1, 1),
        new Date(2015, 1, 1),
        new Date(2016, 1, 1),
        new Date(2017, 1, 1)
      ];
    }

    getStyles() {
      const BLUE_COLOR = "#00a3de";
      const RED_COLOR = "#7c270b";

      return {
        parent: {
          background: "#ccdee8",
          boxSizing: "border-box",
          display: "inline",
          padding: 0,
          margin: 20,
          fontFamily: "'Fira Sans', sans-serif",
          width: "100%",
          height: "auto"
        },
        title: {
          textAnchor: "start",
          verticalAnchor: "end",
          fill: "#000000",
          fontFamily: "inherit",
          fontSize: "18px",
          fontWeight: "bold"
        },
        labelNumber: {
          textAnchor: "middle",
          fill: "#ffffff",
          fontFamily: "inherit",
          fontSize: "14px"
        },

        // INDEPENDENT AXIS
        axisYears: {
          axis: { stroke: "black", strokeWidth: 1},
          ticks: {
            size: (tick) => {
              const tickSize =
                tick.getFullYear() % 5 === 0 ? 10 : 5;
              return tickSize;
            },
            stroke: "black",
            strokeWidth: 1
          },
          tickLabels: {
            fill: "black",
            fontFamily: "inherit",
            fontSize: 16
          }
        },

        // DATA SET ONE
        axisOne: {
          grid: {
            stroke: (tick) =>
              tick === -10 ? "transparent" : "#ffffff",
            strokeWidth: 2
          },
          axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
          ticks: { strokeWidth: 0 },
          tickLabels: {
            fill: BLUE_COLOR,
            fontFamily: "inherit",
            fontSize: 16
          }
        },
        labelOne: {
          fill: BLUE_COLOR,
          fontFamily: "inherit",
          fontSize: 12,
          fontStyle: "italic"
        },
        lineOne: {
          data: { stroke: BLUE_COLOR, strokeWidth: 4.5 }
        },
        axisOneCustomLabel: {
          fill: BLUE_COLOR,
          fontFamily: "inherit",
          fontWeight: 300,
          fontSize: 21
        },

        // DATA SET TWO
        axisTwo: {
          axis: { stroke: RED_COLOR, strokeWidth: 0 },
          tickLabels: {
            fill: RED_COLOR,
            fontFamily: "inherit",
            fontSize: 16
          }
        },
        labelTwo: {
          textAnchor: "end",
          fill: RED_COLOR,
          fontFamily: "inherit",
          fontSize: 12,
          fontStyle: "italic"
        },
        lineTwo: {
          data: { stroke: RED_COLOR, strokeWidth: 4.5 }
        },

        // HORIZONTAL LINE
        lineThree: {
          data: { stroke: "#e95f46", strokeWidth: 2 }
        }
      };
    }



      getDataTypes(){

        console.log(this.props.dataType)

        if (this.props.dataType == "The Pound") {
          return(this.props.data.pound);
        } else if (this.props.dataType == "Chinese Yuan"){
          return(this.props.data.china);
        } else if (this.props.dataType == "Mexican Peso") {
          return(this.props.data.mexico);
        } else if (this.props.dataType == "The Euro") {
          return(this.props.data.euro);
        } else {
          return(this.props.data.dowJones);
        }

      }

  getDomainX() {

    if (this.props.dataType == "The Pound") {
      return(0);
    } else if (this.props.dataType == "Chinese Yuan"){
      return(0);
    } else if (this.props.dataType == "Mexican Peso") {
      return(0);
    } else if (this.props.dataType == "The Euro") {
      return(0);
    } else {
      return(8000);
    }

  }


  getDomainY() {

    if (this.props.dataType == "The Pound") {
      return(3);
    } else if (this.props.dataType == "Chinese Yuan"){
      return(20);
    } else if (this.props.dataType == "Mexican Peso") {
      return(40);
    } else if (this.props.dataType == "The Euro") {
      return(3);
    } else {
      return(20000);
    }

  }


  getX() {

    if (this.props.dataType == "DowJones") {
      return((data)=>(new Date(data.Date)));
    } else {
      return((data)=>(new Date(data.DATE)));
    }

  }

  getY() {

    if (this.props.dataType == "DowJones") {
      return("Value");
    } else {
      return("RATE");
    }
  }

  render() {
    const styles = this.getStyles() ;

    const tickValues = this.getTickValues();
    return(

      <svg style={styles.parent} viewBox="0 0 450 350">

              {/* Create stylistic elements */}
              <rect x="0" y="0" width="10" height="30" fill="#f01616"/>
              <rect x="420" y="10" width="20" height="20" fill="#458ca8"/>

              {/* Define labels */}
              <VictoryLabel x={25} y={24} style={styles.title}
                text="An outlook"
              />
              <VictoryLabel x={430} y={20} style={styles.labelNumber}
                text="1"
/>
              <VictoryLabel x={25} y={55} style={styles.labelOne}
                text={"Economy \n % change on a year earlier"}
              />
              <VictoryLabel x={425} y={55} style={styles.labelTwo}
                text={"Dinosaur exports\n $bn"}
              />

              <g transform={"translate(0, 40)"}>

                <VictoryLine
                  data={[
                    {y:this.getDomainX() , x: new Date(this.props.marker)},
                    {y: this.getDomainY(), x: new Date(this.props.marker)}
                  ]}
                  domain={{
                    x: [new Date(2009, 1, 1), new Date()] }}
                  standalone={false}
                  style={styles.lineThree}
                />

                <VictoryLine
                data={this.getDataTypes()}
                style={{
                  data: {stroke: "#e95f46"}
                }}
                domain={{
                  x: [new Date(2009, 1, 1), new Date()],
                  y: [this.getDomainX(), this.getDomainY()]
                }}

                style={styles.lineOne}
                standalone={false}

                x= {this.getX()} //{(data)=>(new Date(data.Date))}
                y= {this.getY()} //"Value"
              />

                {/*
                  Add the dependent axis for the second data set.
                  Note that all components plotted against this axis will have the same y domain
                */}

              </g>
            </svg>




    )

  }
}



const mapStateToProps = (state) => (
  {
    data: state.data,
  }
);

export default connect(mapStateToProps)(CustomGraph);
