import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Form, Col } from "react-bootstrap";
import "./Cajero.css";
import { useState, useEffect } from "react";
import imagen from "../Cajero/imagen/User-Login.png";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const Cajero = () => {
  let History = useHistory();

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

  const peticionPost = async () => {
    var f = new FormData();
    f.append("Id_act", dataUsuario.Id_act);
    f.append("Fecha_act", dataUsuario.Fecha_act);
    f.append("Id_pro", dataUsuario.Id_pro);
    f.append("Valor_act", dataUsuario.Valor_act);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f).then((response) => {
      setData(data.concat(response.data));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(dataUsuario);
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, [data]);

  return (
    <div className="Fondito">
      <div className="Contenedor-Principal">
        <div className="BOTON">
          <i
            class="bi bi-arrow-left-circle-fill"
            id="circulito"
            onClick={() => History.push("/Roles")}
          ></i>
        </div>
        <div>
          <h1 className="TITULO">Cajero #1</h1>
        </div>
        <div className="Contenedores">
          <div className="Contenedor1">
            <div className="main-container">
              <Container className="d-grid h-100">
                <Form id="sign-in-form" className="text-center w-100">
                  <img className="mb-4 logo" src={imagen} />
                  <div className="Center">
                    <h1 className=" title">Apertura de ahorro</h1>
                  </div>
                  <Form.Group controlId="sign-in-email-address">
                    <Form.Control
                      type="number"
                      size="lg"
                      placeholder="Identificacion del cliente"
                      autoComplete="username"
                      className="position-relative mb-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="sign-in-password" className="mb-3">
                    <Form.Control
                      type="password"
                      size="lg"
                      placeholder="Nº Cuenta"
                      autoComplete="current-password"
                      className="position-relative"
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button className="ingreso">Ingresar</Button>
                  </div>
                </Form>
              </Container>
            </div>
          </div>

  

          <div className="Container-2">
            <div className="container2">
              <Container>
                <Form className="">
                  <div className="Contenedores2">
                    <div className="Contenedor-logo-second">
                      <img
                        className="mb-4 logo-second"
                        width={50}
                        src={imagen}
                      />
                    </div>
                    <div className="Datos">
                      <h1 className="title2">Datos del cliente</h1>
                    </div>
                  </div>

                  <div className="margin">
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre del cliente:</Form.Label>
                      <Form.Control
                        name=""
                        className="cursor"
                        placeholder="Pepito Perez"
                     
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Identificacion del cliente:</Form.Label>
                      <Form.Control
                        name="Id_act"
                        className="cursor"
                        placeholder="Cc. 1006.456.226"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Fecha de apertura:</Form.Label>
                      <Form.Control name="Fecha_act" className="cursor" type="date"  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Tipo de producto:</Form.Label>
                      <div>
                        <select  className="form-select cursor" name="Id_pro" onChange={handleChange} required>
                          <option value="">
                            Seleccione el tipo de producto
                          </option>
                          <option value="Apertura de Cuenta">
                          1
                          </option>
                          <option value="Consignacion">2</option>
                          <option value="Retiro">3</option>
                        </select>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Valor:</Form.Label>
                      <Form.Control
                      name="Valor_act"
                        className="cursor"
                        type="number"
                        placeholder="$100.000"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <div className="BUTTON">
                      <Button  className="BOTON2" href="/Tabla"   onClick={() => peticionPost()}>
                        {" "}
                        Imprimir recibo{" "}
                      </Button>
                    </div>
                  </div>
                </Form>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cajero;
