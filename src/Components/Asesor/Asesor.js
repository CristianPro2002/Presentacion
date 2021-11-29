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
        <div className="padresito">
            
            
            <div className="">
            <div className="inicio">
            <Button onClick = {()=>History.push('/Roles')} className="ini">Regresar</Button>
            </div>
            <div className="regresar">
            <Button onClick = {()=>History.push('/')} className="regre"> Inicio</Button>
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
                <h2 className="tp">Selecciona el tipo de Persona</h2>
                </div>
                <div className="contj">
            <img className = "PJ"
                                alt=""
                                src="https://gestion.pe/resizer/dy8H21bwi9uf03wgZtVdr_B10bg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DS7R4ETDHFFUNAFCKI3BXXUFHU.jpg"
                                width="400"
                                height="200"
                            />
                            <div className="bj">
            <button onClick = {()=>History.push('/PersonaJuridica')} className="pj">Persona Juridica</button>
            </div>
            </div>
            <div className="conn">
            <img className = "PN"
                                alt=""
                                src="https://acasesores.co/es/wp-content/uploads/2020/07/ac-asesores-empresariales-declaraci%C3%B3n-renta-novedades-importantes-personas-naturales-700x291.jpg"
                                width="400"
                                height="200"
                            />
                            <div className="bn">
            <button onClick = {()=>History.push('/PersonaNatural')} className="pn">Persona Natural</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Asesor
