import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  datasets: [
    {
      label: 'Derrama economica MDP',
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 20,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: []
    }
  ]
};


class LineExample4 extends React.Component {

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
      //console.log(json_response)
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

export default LineExample4;