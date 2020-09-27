import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = () => {
  const Resultados = [
    {
      Municipio: "Balleza",
      Region: "Barrancas del Cobre",
      Habitaciones: 81,
    },
    {
      Municipio: "Chinipas",
      Region: "Barrancas del Cobre",
      Habitaciones: 70,
    },
    {
      Municipio: "G. y Calvo",
      Region: "Barrancas del Cobre",
      Habitaciones: 143,
    },
    {
      Municipio: "Guazapares",
      Region: "Barrancas del Cobre",
      Habitaciones: 68,
    },
    {
      Municipio: "Guerrero",
      Region: "Barrancas del Cobre",
      Habitaciones: 159,
    },
    {
      Municipio: "Maguarichi",
      Region: "Barrancas del Cobre",
      Habitaciones: 5,
    },
    {
      Municipio: "Moris",
      Region: "Barrancas del Cobre",
      Habitaciones: 34,
    },
    {
      Municipio: "Uruachi",
      Region: "Barrancas del Cobre",
      Habitaciones: 27,
    },
    {
      Municipio: "Chihuahua",
      Region: "Chihuahua",
      Habitaciones: 6639,
    },
    {
      Municipio: "Cuauhtémoc",
      Region: "Chihuahua",
      Habitaciones: 1238,
    },
    {
      Municipio: "Ojinaga",
      Region: "Desierto",
      Habitaciones: 292,
    },
    {
      Municipio: "Juárez",
      Region: "Juárez",
      Habitaciones: 7310,
    },
    {
      Municipio: "Delicias",
      Region: "Perla de Conchos",
      Habitaciones: 480,
    },
    {
      Municipio: "Camargo",
      Region: "Perla de Conchos",
      Habitaciones: 337,
    },
    {
      Municipio: "Jiménez",
      Region: "Ruta de Villa",
      Habitaciones: 217,
    },
  ];

  const renderMunicipio = (elemento, index) => {
    return (
      <tr key={index}>
        <td>{elemento.Municipio}</td>
        <td>{elemento.Region}</td>
        <td>{elemento.Habitaciones}</td>
      </tr>
    );
  };
  return (
    <div className="CustomTable">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Municipio</th>
            <th>Region</th>
            <th>Habitaciones</th>
            
          </tr>
        </thead>
        <tbody>{Resultados.map(renderMunicipio)}</tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
