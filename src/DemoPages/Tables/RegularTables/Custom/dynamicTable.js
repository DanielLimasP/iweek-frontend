import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = () => {
  const Resultados = [
    {
      _id: "5f6f09c956561ab1be787afb",
     
      Region: "Enero",
      Establecimientos: "9,417237102",
    },
    {
      _id: "5f6f09c956561ab1be787afe",
    
      Region: "Febrero",
      Establecimientos: "6,849555615",
    },
    {
      _id: "5f6f09c956561ab1be787b01",

      Region: "Marzo",
      Establecimientos: "9,61328507",
    },
    {
      _id: "5f6f09c956561ab1be787b04",

      Region: "Abril",
      Establecimientos: "11,26597094",
    },
    {
      _id: "5f6f09c956561ab1be787b07",

      Region: "Mayo",
      Establecimientos: "9,420759741",
    },
    {
      _id: "5f6f09c956561ab1be787b0a",

      Region: "Junio",
      Establecimientos: "8,618462012",
    },
    {
      _id: "5f6f09c956561ab1be787b0d",

      Region: "Julio",
      Establecimientos: "12,92315388",
    },
    {
      _id: "5f6f09c956561ab1be787b10",

      Region: "Agosto",
      Establecimientos: "10,0960681",
    },
    {
      _id: "5f6f09c956561ab1be787b13",

      Region: "Septiembre",
      Establecimientos: "10,62165475",
    },
    {
      _id: "5f6f09c956561ab1be787b16",

      Region: "Octubre",
      Establecimientos: "12,95085754",
    },
    {
      _id: "5f6f09c956561ab1be787b19",
 
      Region: "Noviembre",
      Establecimientos: "12,95085754",
    },
    {
      _id: "5f6f09c956561ab1be787b1c",

      Region: "Diciembre",
      Establecimientos: "8,110058506"
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
            <th>MDP</th>
            
          </tr>
        </thead>
        <tbody>{Resultados.map(renderMunicipio)}</tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
