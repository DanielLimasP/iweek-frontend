import React from 'react';
import {Line} from 'react-chartjs-2';

var data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'turistas en miles',
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
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#ed0f51',
      pointHoverBorderColor: '#ed0f51',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};


class LineExample extends React.Component {

    componentDidMount(){
      
      fetch('http://d1b2de7b75f3.ngrok.io/turistas/get-llegada-turistas-from-year', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({year: "2019"})
      }).then(response => response.json()).then(json_response => {
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Enero)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Febrero)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Marzo)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Abril)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Mayo)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Junio)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Julio)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Agosto)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Septiembre)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Octubre)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Noviembre)
        data.datasets[0].data.push(json_response.concepts[0].Categoria.Total.Meses.Diciembre)
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

export default LineExample;