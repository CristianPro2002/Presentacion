import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";
import "./Cajero.css";

const Tabla = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Tip_pro: "",
    Valor_act: "",
    Cajero: "",
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
      <a className="button" href="javascript:history.go(-1);">
        Regresar
      </a>
      <br />
      <br />
      <center>
        <h1 className="">REGISTRO DE CAJERO</h1>
      </center>
      <br />
      <div className="conttable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Identificacion de actividad de cliente</th>
              <th>Fecha de actividad</th>
              <th>Tipo del producto</th>
              <th>Valor de actividad</th>
              <th># Cajero</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Data) => (
              <tr key={Data.Id_act}>
                <td>{Data.Id_act}</td>
                <td>{Data.Fecha_act}</td>
                <td>{Data.Tip_pro}</td>
                <td>{Data.Valor_act}</td>
                <td>{Data.Cajero}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Tabla;
