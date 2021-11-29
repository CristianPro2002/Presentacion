import React, { useState } from 'react'
import './Estilos.css'
import "react-datepicker/dist/react-datepicker.css";
import Col from 'react-bootstrap/Col'





const PersonaNatural = () => {
  return (
    <div className="padre">
      <h1 className='titulo'>PERSONA NATURAL</h1>
      
     

      <form className="Form">
        <div className="row red-red" >
          <div className="col-md-4">
            <Col className="">
              <h5 className="titulitos">Tipo de solicitud</h5>
              <label className="label-forms">
                Vinculación
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
              </label>
              <label className="label-forms">
                Actualización
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4">
            <Col className="">
              <h5 className="titulitos">Tipo de solicitante</h5>
              <label className="label-forms">
                Beneficiario/Ordenante de giros
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4">
            <Col className="">
              <h5 className="titulitos">Fecha de diligenciamiento</h5>
              <label className="label-forms">
                <input
                  type="date"
                  name="nombre"
                  className="select"
                />
              </label>
            </Col>
          </div>

        </div>

        <div className="contenedor4">
          <h5 className="titulitos">Informacion personal</h5>
          <label className="label-forms">
            Primer Nombre
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>

          <label className="label-forms">
            Segundo Nombre
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>

          <label className="label-forms">
            Primer Apellido
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>

          <label className="label-forms">
            Segundo Apellido
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>
        </div>

        <div className="select">
          <h5>Tipo de documento</h5>
          <select className="select">
  <option selected value="C.C">Cédula de Ciudadania</option>
  <option value="T.I">Tarjeta de identidad</option>
  <option value="R.C">R.Civil</option>
  <option value="C.E">Cédula extranjería</option>
  <option value="P">Pasaporte</option>
  <option value="C.D">Carné diplomático</option>
</select>
        </div>

      <div className="bordes">
      <label className="label-forms">
            Nº documento
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>

          <label className="label-forms">
            Fecha de expedición
            <input
              type="date"
              name="nombre"
              className="input"
            />
          </label>
      </div>

      <div className="bordes">
      <label className="label-forms">
            Lugar de expedición
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>

          <label className="label-forms">
            Fecha de nacimiento
            <input
              type="date"
              name="nombre"
              className="input"
            />
          </label>
      </div>

    
      <div className="bordes">
      <label className="label-forms">
            Ciudad de nacimiento
            <input
              type="text"
              name="nombre"
              className="input"
            />
          </label>

          <div className="row">
          <div className="col">
            <Col className="bordes cuadro">
              <h5>Género</h5>
              <label className="label-forms">
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
                F
              </label>
              <label className="label-forms">
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
                M
              </label>
            </Col>
          </div>

          <div className="col">
            <Col className="bordes">
              <h5>Estado civil</h5>
              <label className="label-forms">
                Soltero
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
              </label>
              <label className="label-forms">
               Casado
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
              </label>
              <label className="label-forms">
               Unión libre
                <input
                  type="checkbox"
                  name="nombre"
                  className=""
                />
              </label>
            </Col>
          </div>
        </div>
      </div>
      </form>
    </div>

  )
}

export default PersonaNatural;
