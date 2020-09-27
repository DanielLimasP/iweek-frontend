import React from 'react';
import {Line} from 'react-chartjs-2';

var data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'Turistas por miles',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#ed0f51',
      borderColor: '#ed0f51',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ed0f51',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 20,
      pointHoverBackgroundColor: '#ed0f51',
      pointHoverBorderColor: '#ed0f51',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: []
    }
  ]
};


class LineExample6 extends React.Component {

    componentDidMount(){
      
      for(let i = 0; i <= 12; i++){
        data.datasets[0].data.push(Math.random() * (4000, 13000) + 4000)
      }
      
      fetch('http://d1b2de7b75f3.ngrok.io/turistas/get-llegada-turistas-from-year', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({year: "2019"})
      }).then(response => response.json()).then(json_response => {
        console.log("hello")
      });
    }

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default LineExample6;