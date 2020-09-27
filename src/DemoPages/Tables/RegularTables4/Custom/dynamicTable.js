import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = () => {
  const Resultados = [
    {
      _id: "5f6f09c956561ab1be787afb",
     
      Region: "Enero",
      Establecimientos: "5780",
    },
    {
      _id: "5f6f09c956561ab1be787afe",
    
      Region: "Febrero",
      Establecimientos: "3961",
    },
    {
      _id: "5f6f09c956561ab1be787b01",

      Region: "Marzo",
      Establecimientos: "4624",
    },
    {
      _id: "5f6f09c956561ab1be787b04",

      Region: "Abril",
      Establecimientos: "5851",
    },
    {
      _id: "5f6f09c956561ab1be787b07",

      Region: "Mayo",
      Establecimientos: "3189",
    },
    {
      _id: "5f6f09c956561ab1be787b0a",

      Region: "Junio",
      Establecimientos: "4861",
    },
    {
      _id: "5f6f09c956561ab1be787b0d",

      Region: "Julio",
      Establecimientos: "6179",
    },
    {
      _id: "5f6f09c956561ab1be787b10",

      Region: "Agosto",
      Establecimientos: "3488",
    },
    {
      _id: "5f6f09c956561ab1be787b13",

      Region: "Septiembre",
      Establecimientos: "3086",
    },
    {
      _id: "5f6f09c956561ab1be787b16",

      Region: "Octubre",
      Establecimientos: "2658",
    },
    {
      _id: "5f6f09c956561ab1be787b19",
 
      Region: "Noviembre",
      Establecimientos: "7201",
    },
    {
      _id: "5f6f09c956561ab1be787b1c",

      Region: "Diciembre",
      Establecimientos: "8504"
    },
    
    
  ];

  const renderMunicipio = (elemento, index) => {
    return (
      <tr key={index}>
        <td>{elemento.Region}</td>
        <td>{elemento.Establecimientos}</td>
        
      </tr>
    );
  };
  return (
    <div className="CustomTable">
      <Table bordered hover>
        <thead>
          <tr>
          
            <th>Mes</th>
            <th>Turistas</th>
            
          </tr>
        </thead>
        <tbody>{Resultados.map(renderMunicipio)}</tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
