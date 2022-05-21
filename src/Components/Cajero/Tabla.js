import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";
import "./Tabla.css";
import { AiFillPrinter } from "react-icons/ai";


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

  let History = useHistory();

  return (
    <div className="Background">
      <div className="salirB">
          <i
            class="bi bi-arrow-left-circle-fill"
            id="circulito"
            onClick={() => History.goBack()}
          ></i>
        </div>
      <center>
        <h1 className="TITULO">REGISTRO DE CAJERO</h1>
      </center>
      <div className="conttable">
        <a className="reporte" href="http://localhost:8080/documen"><AiFillPrinter/></a>
        <Table striped bordered hover className="tabla">
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Tabla;
