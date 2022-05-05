import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Form, Col } from "react-bootstrap";
import "./Cajero.css";
import { useState } from "react";
import imagen from "../Cajero/imagen/User-Login.png";

const Cajero = () => {
  let History = useHistory();

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
        <div className="Center">
          <h1 className="TITULO">Cajero</h1>
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
              <Container className="d-grid h-100">
                <Form className="Contenedor2">
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
                        className="cursor"
                        placeholder="Pepito Perez"
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Identificacion del cliente:</Form.Label>
                      <Form.Control
                        className="cursor"
                        placeholder="Cc. 1006.456.226"
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Tipo de producto</Form.Label>
                      <div>
                        <select className="SELECT">
                          <option>Seleccione el tipo de producto</option>
                          <option>Apertura de Cuenta</option>
                          <option>Consignacion</option>
                          <option>Retiro</option>
                        </select>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Valor:</Form.Label>
                      <Form.Control
                        className=""
                        placeholder="$100.000"
                      />
                    </Form.Group>

                    <div className="BUTTON">
                      <Button className="BOTON2"> Imprimir recibo </Button>
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
