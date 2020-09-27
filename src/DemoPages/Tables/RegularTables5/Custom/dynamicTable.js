import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = () => {
  const Resultados = [
    {
      _id: "5f6f09c956561ab1be787afb",
     
      Region: "Enero",
      Establecimientos: "41.37%",
    },
    {
      _id: "5f6f09c956561ab1be787afe",
    
      Region: "Febrero",
      Establecimientos: "39.48%",
    },
    {
      _id: "5f6f09c956561ab1be787b01",

      Region: "Marzo",
      Establecimientos: "28.46%",
    },
    {
      _id: "5f6f09c956561ab1be787b04",

      Region: "Abril",
      Establecimientos: "0.00%",
    },
    {
      _id: "5f6f09c956561ab1be787b07",

      Region: "Mayo",
      Establecimientos: "0.00%",
    },
    {
      _id: "5f6f09c956561ab1be787b0a",

      Region: "Junio",
      Establecimientos: "5.75%",
    },
    {
      _id: "5f6f09c956561ab1be787b0d",

      Region: "Julio",
      Establecimientos: "6.22%",
    },
    {
      _id: "5f6f09c956561ab1be787b10",

      Region: "Agosto",
      Establecimientos: "9.20%",
    },
    {
      _id: "5f6f09c956561ab1be787b13",

      Region: "Septiembre",
      Establecimientos: "0.00%",
    },
    {
      _id: "5f6f09c956561ab1be787b16",

      Region: "Octubre",
      Establecimientos: "0.00%",
    },
    {
      _id: "5f6f09c956561ab1be787b19",
 
      Region: "Noviembre",
      Establecimientos: "0.00%",
    },
    {
      _id: "5f6f09c956561ab1be787b1c",

      Region: "Diciembre",
      Establecimientos: "0.00%"
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
            <th>% Ocupación</th>
            
          </tr>
        </thead>
        <tbody>{Resultados.map(renderMunicipio)}</tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
