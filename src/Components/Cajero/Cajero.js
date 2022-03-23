import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Form, Col } from "react-bootstrap";
import "./Cajero.css";
import { useState } from "react";

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
        <div className="center">
          <h1 className="TITULO">Cajero</h1>
        </div>
        <div className="Contenedor1">
          <div className="main-container">
            <Container className="d-grid h-100">
              <Form id="sign-in-form" className="text-center w-100">
                <img
                  className="mb-4 logo"
                  src="https://carniceriarivas.com/images/mobile/ico-usuario.png"
                  alt="Icon"
                />
                <h1 className="mb-3 title">Apertura de ahorro</h1>

                <Form.Group controlId="sign-in-email-address">
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Nombre del cliente"
                    autoComplete="username"
                    className="position-relative"
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

                <Form.Group
                  controlId="recordarme"
                  className="d-flex justify-content-center mb-4"
                >
                  <Form.Check label="Recordarme" />
                </Form.Group>
                <div className="d-grid">
                  <Button className="ingreso">Ingresar</Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>

        <div className="hola">
          <div className="container2">
            <Container className="d-grid h-100">
              <Form className="Contenedor2">
                <div>
                  <img
                    className="mb-3 logo-second"
                    src="https://carniceriarivas.com/images/mobile/ico-usuario.png"
                    alt="Icon"
                  />
                  <h1 className="mb-5 title2">Datos del cliente</h1>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre del cliente:</Form.Label>
                  <Form.Control
                    className="cursor"
                    placeholder="Pepito Perez"
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cédula del cliente:</Form.Label>
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
                      <option>Cuenta de ahorro</option>
                      <option>Cuenta corriente</option>
                    </select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Valor a consignar:</Form.Label>
                  <Form.Control
                    className="cursor"
                    placeholder="$100.000"
                    disabled
                  />
                </Form.Group>

                <div className="BUTTON">
                  <Button className="BOTON2"> Imprimir recibo </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cajero;
