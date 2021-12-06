import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Asesor.css'
import Carousel from 'react-bootstrap/Carousel'
import Imagen1 from './Imagens/imagen1.jpg'
import Imagen5 from './Imagens/Imagen5.jpg'
import Imagen3 from './Imagens/Imagen3.png'
import Imagen4 from './Imagens/Imagen4.jpg'
import personaj from './Imagens/personaj.png'
import personan from './Imagens/personan.jpg'

const Asesor = () => {

    let History  = useHistory();

    return (
        <div className="principal">
            <div className="padresito">
            
            
            <div className="inicio">
            <Button onClick = {()=>History.push('/Roles')} className="ini">Regresar</Button>
            </div>
            <div className="regresar">
            <Button onClick = {()=>History.push('/')} className="regre"> Inicio</Button>
            </div>
            
            <div className = "contenedort">
            <h1 className="titulo">Asesor</h1>
            </div>
            
            
            <div className="pri">
            <div className="concaro">
            
              <div className="caro">
            
            <Carousel fade className="carousel">
  <Carousel.Item>
    <img
      id="imagen1"
      className="d-block w-100"
      src={Imagen1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id="imagen1"
      className="d-block w-100"
      src={Imagen5}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id="imagen1"
      className="d-block w-100"
      src={Imagen4}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div className="col">
            <div className="contb">
              <div className="col">
            
              <div className="titu">
                <h2 className="tp">Selecciona el tipo de Persona</h2>
                </div>
                
                <div className="row">
                <div className="contj">
                  <div className="col">
            <img className = "PJ"
                                alt=""
                                src={personaj}
                                
                            />
                            <div className="bj">
            <button onClick = {()=>History.push('/PersonaJuridica')} className="pj">Persona Juridica</button>
            </div>
            </div>
            </div>
            
            <div className="conn">
            <div className="col">
            <img className = "PN"
                                alt=""
                                src={personan}
                                
                            />
                            <div className="bn">
            <button onClick = {()=>History.push('/PersonaNatural')} className="pn">Persona Natural</button>
            </div>
            </div>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Asesor
