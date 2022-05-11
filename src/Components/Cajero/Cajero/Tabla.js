import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export const Tabla = () => {
  const baseUrl = "http://localhost:8080/Banca2/";

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Id_pro: "",
    Valor_act: "",
  });

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };


  useEffect(() => {
    peticionGet();
  }, [data]);

  return (
    <div>
      <div className="conttable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Identificacion de actividad de cliente</th>
              <th>Fecha de actividad</th>
              <th>Identificacion de tipo del producto </th>
              <th>Valor de actividad </th>
            </tr>
          </thead>
          <tbody>
            {data.map((Data) => (
              <tr key={Data.Id_act}>
                <td>{Data.Id_act}</td>
                <td>{Data.Fecha_act}</td>
                <td>{Data.Id_pro}</td>
                <td>{Data.Valor_act}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
