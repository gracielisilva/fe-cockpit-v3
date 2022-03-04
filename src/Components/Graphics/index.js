import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

function Graphic({typeGraph, width, height, title, data, color}) {
  const global = {
    credits: {
      enabled: false
    },
    chart: {
      type: typeGraph,
      width: width,
      height: height,
      borderRadius:5
    },
    title: {
      text: title,
      style: {
        color: '#939598',
        font: '10pt Mark Pro, sans-serif',
      }
    },
    colors:color,
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        style: {
          color: '#939598',
          font: '7pt Mark Pro, sans-serif',
        }
      },
      tickInterval: 1
    },
    xAxis: {
      title: {
        text: ''
      },
      labels: {
        style: {
          color: '#939598',
          font: '7pt Mark Pro, sans-serif',
        }
      },
      tickInterval: 1
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },
    series: [{
      name: "",
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  }

  return <HighchartsReact highcharts={Highcharts} options={global} />
}

export default Graphic;