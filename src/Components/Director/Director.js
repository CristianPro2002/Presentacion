import React from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Navbar,Container,Nav,} from 'react-bootstrap'
import './Estilos_Navbar/estilo_nav.css'
const Director = () => {

let History  = useHistory();
        
    return (
        <div>
            <Navbar id="Nav_color"bg="" variant ="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="Roles">Regresar</Nav.Link>
                    <Nav.Link href="">Tabla de usuarios</Nav.Link>
                    <Nav.Link href="#" >
                    Reportes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>    
        </div>
    )
    
}

export default Director
