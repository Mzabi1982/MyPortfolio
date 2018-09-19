import React, { Component } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  state = {
    chartdata: {
      labels: [
        "Boston",
        "Worceter",
        "Springfield",
        "Lowell",
        "cambrdge",
        "casa"
      ],
      datasets: [
        {
          label: "population",
          data: [7653, 6543, 5563, 4876, 2234, 1234],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "LArgest cities in Massashutes",
        fontSize: 25
      },
      legend: {
        position: "right",
        labels: {
          fontColor: "black"
        }
      }
    }
  };

  render() {
    return (
      <div className="Chart">
        <Bar
          data={this.state.chartdata}
          options={{
            title: {
              display: true,
              text: "Largest cities in Massashutes",
              fontSize: 25
            },
            legend: {
              position: "right",
              labels: {
                fontColor: "black"
              }
            }
          }}
        />

        <Line
          data={this.state.chartdata}
          options={{
            title: {
              display: true,
              text: "Largest cities in Massashutes",
              fontSize: 25
            },
            legend: {
              position: "right",
              labels: {
                fontColor: "black"
              }
            }
          }}
        />

        <Pie
          data={this.state.chartdata}
          options={{
            title: {
              display: true,
              text: "Largest cities in Massashutes",
              fontSize: 25
            },
            legend: {
              position: "right",
              labels: {
                fontColor: "black"
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
