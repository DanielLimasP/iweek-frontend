import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = () => {
  const Resultados = [
    { Municipio: "Chihuahua", Region: "X", Año: "2019" },
    { Municipio: "Juarez", Region: "D", Año: "2020" },
    { Municipio: "Creel", Region: "D", Año: "2019" },
    { Municipio: "Delicias", Region: "D", Año: "2020" },
  ];

  const renderMunicipio = (elemento, index) => {
    return (
      <tr key={index}>
        <td>{elemento.Municipio}</td>
        <td>{elemento.Region}</td>
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
            <th>Año</th>
          </tr>
        </thead>
        <tbody>{Resultados.map(renderMunicipio)}</tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
