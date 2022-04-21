import React from "react";
import { Chart } from "react-google-charts";


export function Grafico({values,title,ordenada,axis}) {
    const options = {
        curveType: "line",
        legend: { position: "bottom" },
        pointSize: 7,
      vAxis: {
        textStyle: {
          color: 'white'
        },
        titleTextStyle: {
          color: 'white'
        },
        title :ordenada,
        gridlines: {count: 10},
       },
       hAxis: {
        textStyle: {
           color: 'white'
        },
        titleTextStyle: {
        color: 'white'
        },
        title :axis,
      },
      height: 350,
      backgroundColor: {
        fill: 'black',
      },
      colors: ['orange'],
      chartArea:{width:"70%"},
      };
  return (
      <div className="grafico">
        <Chart
            chartType="LineChart"
            data={[[axis,title],...values]}
            options={options}
        />
      </div>
  );
}
