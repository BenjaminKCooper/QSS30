// I based this graph on the starter kit from: https://formidable.com/open-source/victory/guides/custom-charts
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {VictoryLine, VictoryLabel, VictoryAxis, VictoryBar} from 'victory';





// example class based component (smart component)
class TrendsCustomGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.data)
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
          data: { stroke: "#e95f46", strokeWidth: 1 }
        }
      };
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


                {/* Red annotation line */}


                <VictoryBar
                data={this.props.data}
                standalone={false}

                domain={{
                  x: [new Date(this.props.data[0].formattedTime.replace("at ", "")), new Date(this.props.data[179].formattedTime.replace("at ", ""))] }}

                x={(datum)=>(new Date(datum.formattedTime.replace("at ", "")))}
                y={(datum)=>(datum.value[0])}
              />

              <VictoryBar
                data={[
                  {y:100 , x: new Date(this.props.marker)}
                ]}
                domain={{
                  x: [new Date(this.props.data[0].formattedTime.replace("at ", "")), new Date(this.props.data[179].formattedTime.replace("at ", ""))] }}
                standalone={false}
                style={styles.lineThree}
              />

              </g>
            </svg>




    )

  }
}


export default TrendsCustomGraph;
