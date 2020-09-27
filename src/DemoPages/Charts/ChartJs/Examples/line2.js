import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  datasets: [
    {
      label: 'Derrama economica MDP',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40,25,30,34,56,79]
    }
  ]
};


class LineExample2 extends React.Component {

  componentDidMount(){
    
  fetch('http://d1b2de7b75f3.ngrok.io/turistas/get-llegada-turistas-from-year', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({year: "2019"})
  }).then(response => response.json()).then(json_response => {
    console.log(json_response)

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

export default LineExample2;