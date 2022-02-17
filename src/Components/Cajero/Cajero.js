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
    <div className="Contenedor-Principal">
  
        <br/>
      <div className="Botones"> 
        <Button onClick={() => History.push("/Roles")} className="FLECHA"> 
          {" ← "} 
        </Button> 
      </div>
       
  

     <div className="Contenedor1">
        <div  className="main-container">

          <Container  className="d-grid h-100">
            <Form id="sign-in-form" className="text-center w-100">
              <img
                className="mb-4 logo"
                src="https://carniceriarivas.com/images/mobile/ico-usuario.png"
                alt="Icon"
              />
              <h1 className="mb-3 fs-4 fw-normal">Información del cliente</h1>
              <Form.Group controlId="sign-in-email-address">
                <Form.Control
                  type="email"
                  size="lg"
                  placeholder="Nombre"
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
                <Button>Ingresar</Button>
              </div>
            </Form>
          </Container>
        </div>
        </div>

<div className="hola">
      <div className="container2">
        <Container  className="d-grid h-100">
          <Form className="Contenedor2">
            <div>
              <img
                className="mb-3  logo-second"
                src="https://carniceriarivas.com/images/mobile/ico-usuario.png"
                alt="Icon"
              />
              <h1 className="mb-5 fs-8 fw-normal">Datos del cliente</h1>
              <Form.Group className="mb-3">
                <Form.Label>Nombre del cliente</Form.Label>
                <Form.Control placeholder="Pepito Perez" disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Documento de identidad</Form.Label>
                <Form.Control placeholder="Cc. 1006.456.226" disabled />
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
                <Form.Label>Total a pagar</Form.Label>
                <Form.Control placeholder="$100.000" disabled />
              </Form.Group>
            </div>
            <div className="BUTTON">
            <button> Imprimir </button>
            </div>
          </Form>
        </Container>
      </div>
      </div>
    </div>
  );
};

export default Cajero;
