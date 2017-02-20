libraries:
- https://github.com/nlp-compromise
- http://openexchangerates.github.io/money.js/



- http://varianceexplained.org/r/trump-tweets/
- http://unix.stackexchange.com/questions/189684/remove-duplicate-entries-from-a-csv-file
- https://www.quandl.com/tools/r
- https://github.com/darwin/csv2json
- https://cran.r-project.org/web/packages/twitteR/README.html



- http://www.csvjson.com/csv2json


- http://elections.huffingtonpost.com/pollster/api/v2
- http://elections.huffingtonpost.com/pollster



- https://www.federalregister.gov/reader-aids/developer-resources



Outside Lit:
  - some insite
    - rather than describing the tool, set up the question, try to answer it in my tool, and spend the paper bounching off ideas from the course themes/ relates to the tool

    ideas:
      - when
      - TFIDF term freequenc inverse document freequence method in a corpus (LOOK UP THIS)




-----
      <V.VictoryLine
      data={this.props.data.china}
      style={{
        data: {stroke: "#e95f46"}
      }}

      x={(data) => new Date(data.DATE)}
      y="RATE"
      />

      <V.VictoryLine
      data={this.props.data.euro}
      style={{
      data: {stroke: "#e95f46"}
      }}

      x={(data) => new Date(data.DATE)}
      y="RATE"
      />

      <V.VictoryLine
      data={this.props.data.pound}
      style={{
      data: {stroke: "#e95f46"}
      }}

      x={(data) => new Date(data.DATE)}
      y="RATE"
      />

      <V.VictoryLine
      data={this.props.data.mexico}
      style={{
      data: {stroke: "#e95f46"}
      }}

      x={(data) => new Date(data.DATE)}
      y="RATE"
      />

------














            <V.VictoryChart
        domainPadding={{x: 40}}
      >
        <V.VictoryLine
        data={this.props.data.dowJones}
        x="Date"
        y="Value"
      />
        <V.VictoryAxis
          label="Date"
          style={{
            axisLabel: { padding: 30 }
          }}
        />
        <V.VictoryAxis dependentAxis
          label="Value"
          style={{
            axisLabel: { padding: 40 }
          }}
        />
      </V.VictoryChart>







  _________



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

    }

      getDataSetOne() {
        return [
          {x: new Date(2000, 1, 1), y: 12},
          {x: new Date(2000, 6, 1), y: 10},
          {x: new Date(2000, 12, 1), y: 11},
          {x: new Date(2001, 1, 1), y: 5},
          {x: new Date(2002, 1, 1), y: 4},
          {x: new Date(2003, 1, 1), y: 6},
          {x: new Date(2004, 1, 1), y: 5},
          {x: new Date(2005, 1, 1), y: 7},
          {x: new Date(2006, 1, 1), y: 8},
          {x: new Date(2007, 1, 1), y: 9},
          {x: new Date(2008, 1, 1), y: -8.5},
          {x: new Date(2009, 1, 1), y: -9},
          {x: new Date(2010, 1, 1), y: 5},
          {x: new Date(2013, 1, 1), y: 1},
          {x: new Date(2014, 1, 1), y: 2},
          {x: new Date(2015, 1, 1), y: -5}
        ];
      }

      getDataSetTwo() {
        return [
          {x: new Date(2000, 1, 1), y: 5},
          {x: new Date(2003, 1, 1), y: 6},
          {x: new Date(2004, 1, 1), y: 4},
          {x: new Date(2005, 1, 1), y: 10},
          {x: new Date(2006, 1, 1), y: 12},
          {x: new Date(2007, 2, 1), y: 48},
          {x: new Date(2008, 1, 1), y: 19},
          {x: new Date(2009, 1, 1), y: 31},
          {x: new Date(2011, 1, 1), y: 49},
          {x: new Date(2014, 1, 1), y: 40},
          {x: new Date(2015, 1, 1), y: 21}
        ];
      }

      getTickValues() {
        return [
          new Date(1999, 1, 1),
          new Date(2000, 1, 1),
          new Date(2001, 1, 1),
          new Date(2002, 1, 1),
          new Date(2003, 1, 1),
          new Date(2004, 1, 1),
          new Date(2005, 1, 1),
          new Date(2006, 1, 1),
          new Date(2007, 1, 1),
          new Date(2008, 1, 1),
          new Date(2009, 1, 1),
          new Date(2010, 1, 1),
          new Date(2011, 1, 1),
          new Date(2012, 1, 1),
          new Date(2013, 1, 1),
          new Date(2014, 1, 1),
          new Date(2015, 1, 1),
          new Date(2016, 1, 1)
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





    render() {
      const styles = this.getStyles() ;
      const dataSetOne = this.getDataSetOne();
      const dataSetTwo = this.getDataSetTwo();
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
                  {/* Add shared independent axis */}
                  <VictoryAxis
                    scale="time"
                    standalone={false}
                    style={styles.axisYears}
                    tickValues={tickValues}
                    tickFormat={
                      (x) => {
                        if (x.getFullYear() === 2000) {
                          return x.getFullYear();
                        }
                        if (x.getFullYear() % 5 === 0) {
                          return x.getFullYear().toString().slice(2);
                        }
                      }
                    }
                  />

                  {/*
                    Add the dependent axis for the first data set.
                    Note that all components plotted against this axis will have the same y domain
                  */}
                  <VictoryAxis dependentAxis
                    domain={[-10, 15]}
                    offsetX={50}
                    orientation="left"
                    standalone={false}
                    style={styles.axisOne}
                  />

                  {/* Red annotation line */}
                  <VictoryLine
                    data={[
                      {y:0 , x: new Date(this.props.marker)},
                      {y: 15, x: new Date(this.props.marker)}
                    ]}
                    domain={{
                      x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                      y: [-10, 15]
                    }}
                    scale={{x: "time", y: "linear"}}
                    standalone={false}
                    style={styles.lineThree}
                  />

                  {/* dataset one */}
                  <VictoryLine
                    data={dataSetOne}
                    domain={{
                      x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                      y: [-10, 15]
                    }}
                    interpolation="monotoneX"
                    scale={{x: "time", y: "linear"}}
                    standalone={false}
                    style={styles.lineOne}
                  />

                  {/*
                    Add the dependent axis for the second data set.
                    Note that all components plotted against this axis will have the same y domain
                  */}
                  <VictoryAxis dependentAxis
                    domain={[0, 50]}
                    orientation="right"
                    standalone={false}
                    style={styles.axisTwo}
                  />

                  {/* dataset two */}
                  <VictoryLine
                    data={dataSetTwo}
                    domain={{
                      x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                      y: [0, 50]
                    }}
                    interpolation="monotoneX"
                    scale={{x: "time", y: "linear"}}
                    standalone={false}
                    style={styles.lineTwo}
                  />
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






  "dev": "open -a Google\ Chrome --args --disable-web-security --user-data-dir && npm start"
