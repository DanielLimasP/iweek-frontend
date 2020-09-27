import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = () => {
  const Resultados = [
    {
      _id: "5f6f09c956561ab1be787afb",
      Año: "2019",
      Municipio: "Nuevo Casas Grandes",
      Region: "Arqueológica",
      Establecimientos: 12,
    },
    {
      _id: "5f6f09c956561ab1be787afe",
      Año: "2019",
      Municipio: "Madera",
      Region: "Arqueológica",
      Establecimientos: 14,
    },
    {
      _id: "5f6f09c956561ab1be787b01",
      Año: "2019",
      Municipio: "Bocoyna",
      Region: "Barrancas del Cobre",
      Establecimientos: 58,
    },
    {
      _id: "5f6f09c956561ab1be787b04",
      Año: "2019",
      Municipio: "Ocampo",
      Region: "Barrancas del Cobre",
      Establecimientos: 15,
    },
    {
      _id: "5f6f09c956561ab1be787b07",
      Año: "2019",
      Municipio: "Urique",
      Region: "Barrancas del Cobre",
      Establecimientos: 36,
    },
    {
      _id: "5f6f09c956561ab1be787b0a",
      Año: "2019",
      Municipio: "Guachochi",
      Region: "Barrancas del Cobre",
      Establecimientos: 16,
    },
    {
      _id: "5f6f09c956561ab1be787b0d",
      Año: "2019",
      Municipio: "Batopilas",
      Region: "Barrancas del Cobre",
      Establecimientos: 11,
    },
    {
      _id: "5f6f09c956561ab1be787b10",
      Año: "2019",
      Municipio: "Balleza",
      Region: "Barrancas del Cobre",
      Establecimientos: 4,
    },
    {
      _id: "5f6f09c956561ab1be787b13",
      Año: "2019",
      Municipio: "Chinipas",
      Region: "Barrancas del Cobre",
      Establecimientos: 4,
    },
    {
      _id: "5f6f09c956561ab1be787b16",
      Año: "2019",
      Municipio: "G. y Calvo",
      Region: "Barrancas del Cobre",
      Establecimientos: 14,
    },
    {
      _id: "5f6f09c956561ab1be787b19",
      Año: "2019",
      Municipio: "Guazapares",
      Region: "Barrancas del Cobre",
      Establecimientos: 10,
    },
    {
      _id: "5f6f09c956561ab1be787b1c",
      Año: "2019",
      Municipio: "Guerrero",
      Region: "Barrancas del Cobre",
      Establecimientos: 11,
    },
    {
      _id: "5f6f09c956561ab1be787b1f",
      Año: "2019",
      Municipio: "Maguarichi",
      Region: "Barrancas del Cobre",
      Establecimientos: 2,
    },
    {
      _id: "5f6f09c956561ab1be787b22",
      Año: "2019",
      Municipio: "Moris",
      Region: "Barrancas del Cobre",
      Establecimientos: 4,
    },
    {
      _id: "5f6f09c956561ab1be787b37",
      Año: "2019",
      Municipio: "Camargo",
      Region: "Perla de Conchos",
      Establecimientos: 13,
    },
  ];

  const renderMunicipio = (elemento, index) => {
    return (
      <tr key={index}>
        <td>{elemento.Municipio}</td>
        <td>{elemento.Region}</td>
        <td>{elemento.Establecimientos}</td>
        <td>{elemento.Año}</td>
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
            <th>Establecimientos</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>{Resultados.map(renderMunicipio)}</tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
