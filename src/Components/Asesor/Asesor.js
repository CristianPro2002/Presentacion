import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Asesor.css'
import Carousel from 'react-bootstrap/Carousel'

const Asesor = () => {

    let History  = useHistory();

    return (
        <div className="padre">
            
            
            <div className="">
            <div className="inicio">
            <Button onClick = {()=>History.push('/')} className="ini">Inicio</Button>
            </div>
            <div className="regresar">
            <Button onClick = {()=>History.push('/Roles')} className="regre"> Regresar</Button>
            </div>
            </div>
            <div className = "contenedort">
            <h1 className="titulo">Asesor</h1>
            </div>
            
            <div className="pri">
            <div className="concaro">
            
            <Carousel fade className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://blog.cualessontusmetas.com/wp-content/uploads/2020/01/imagen-post-FB.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://forbes.es/wp-content/uploads/2018/02/asesor_financiero_mediolanum.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://economipedia.com/wp-content/uploads/Asesor-fiscal-para-la-declaraci%C3%B3n-de-la-renta-scaled.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

            <div className="contb">
              <div className="titu">
                <h2>Selecciona el tipo de Persona</h2>
                </div>
            </div>

            <div className="ct">
            <div className="contj">
            <Button onClick = {()=>History.push('/PersonaJuridica')} className="pj">Persona Juridica</Button>
            </div>
            <div className="conn">
            <Button onClick = {()=>History.push('/PersonaNatural')} className="pn">Persona Natural</Button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Asesor
