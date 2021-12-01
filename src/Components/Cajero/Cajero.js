import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Form, Collapse } from 'react-bootstrap';
import './Cajero.css'
import { useState } from 'react';




const Cajero = () => {

  let History = useHistory();
  const [open, setOpen] = useState(false);

  return (

 

    <div className="Contenedor-Principal">
     <div className="Botones" >
      <Button onClick={() => History.push('/home')}>Inicio</Button>
      <br />
      <br />
      <Button onClick={() => History.push('/Roles')}> Regresar</Button>
      <br />
      <br/>

      </div>

     
      <div className="main-container">
        <br />
        <Container id="main-container" className="d-grid h-100">
          <Form id="sign-in-form" className="text-center w-100">
            <img
              className="mb-4 logo"
              src="https://carniceriarivas.com/images/mobile/ico-usuario.png"
              alt="Icon" />
            <h1 className="mb-3 fs-4 fw-normal">Información del cliente</h1>
            <Form.Group controlId="sign-in-email-address">
              <Form.Control type="email" size="lg" placeholder="Nombre" autoComplete="username" className="position-relative" />
            </Form.Group>
            <Form.Group controlId="sign-in-password" className="mb-3">
              <Form.Control type="password" size="lg" placeholder="Numero de cuenta" autoComplete="current-password" className="position-relative" />
            </Form.Group>
            <Form.Group controlId="recordarme" className="d-flex justify-content-center mb-4">
              <Form.Check label="Recordarme" />
            </Form.Group>
            <div className="d-grid">
              <Button onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >Ingresar</Button>
              <Collapse in={open}>
                <div className="example-collapse-text">
                  <img
                    className="mb-3  logo-second"
                    src="https://carniceriarivas.com/images/mobile/ico-usuario.png"
                    alt="Icon" />
                  <h1 className="mb-5 fs-4 fw-normal">Datos del cliente</h1>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del cliente</Form.Label>
                    <Form.Control placeholder="Pepito Perez" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Documento de identidad</Form.Label>
                    <Form.Control placeholder="Cc. 1006.456.226" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Saldo actual</Form.Label>
                    <Form.Control placeholder="$500.000" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Dinero a depositar</Form.Label>
                    <Form.Control placeholder="$1.000.000" disabled />
                  </Form.Group>
                </div>
              </Collapse>
            </div>
          </Form>        
        </Container>
      </div> 
    </div>
    
    
  );
};


export default Cajero;
