import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Estilos.css";

const PersonaJuridica = () => {
  return (
    <div className="Fondo">
      <h1 className="Titulo-principal">PERSONA JURIDICA</h1>
      <form className="row red-red">
        <div className="col-md-8 ">
          <Col className="column">
            <h5 className="Titulo">Tipo de solicitud</h5>
            <label className="label">
              <input type="checkbox" name="" className="" /> Vinculación
            </label>
            <label className="label">
              <input type="checkbox" name="" className="" /> Actualización
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <h5 className="Titulo">Fecha diligenciamiento</h5>
            <label className="label">
              <input type="date" name="" className=" Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <h5 className="Titulo-2">Información general de la entidad</h5>
            <label className="label">
              Tipo de documento <input type="checkbox" name="" className="" />{" "}
              NIT
            </label>
            <label className="label-2">
              Nº documento
              <input type="number" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <h5 className="Titulo-3"></h5>
            <label className="label">
              <input type="checkbox" name="" className="" /> Fideicomiso{" "}
              <h7 className="Aviso">
                {" "}
                Este campo es diligenciado por el Grupo Bancolombia
              </h7>
            </label>
            <label className="label-2">
              Nº de fideicomiso{" "}
              <input type="number" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12">
          <Col className="column">
            <label className="label-2">
              Nombre o razón social{" "}
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-7">
          <Col className="column">
            <label className="label-2">
              Nombre corto o sigla
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-5">
          <Col className="column">
            <label className="label-3">
              Fecha de constitución{" "}
              <input type="date" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <label className="label-2">
              Ciudad de constitución{" "}
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <label className="label-2">
              Pais de constitución{" "}
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12">
          <Col className="column">
            <label className="label-2">
              Dirección sede principal
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Barrio
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Ciudad/Municipio
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Departamento
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-7">
          <Col className="column">
            <label className="label-2">
              País
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-5">
          <Col className="column">
            <label className="label-4">
              Teléfono
              <input type="text" name="" className="Border" />
            </label>
            <label className="label-4">
              Ext
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12">
          <Col className="column">
            <label className="label-2">
              Correo electrónico sede principal
              <input type="text" name="" className="Border" />
            </label>
          </Col>
          <br />
        </div>

        <div className="col-md-7">
          <Col className="column">
            <h5 className="Titulo-4">Información del representante legal</h5>
            <label className="label-2">
              {" "}
              Tipo de documento
              <select className="Select-One">
                <option>Seleccione su documento de identidad</option>
                <option>CC</option>
                <option>Cédula de extranjeria</option>
                <option>Pasaporte</option>
                <option>Carné diplomático</option>
              </select>
            </label>
          </Col>
        </div>

        <div className="col-md-5">
          <Col className="column">
            <h5 className="Titulo-3"></h5>
            <label className="label-2">
              N° de documento
              <input type="number" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12">
          <Col className="column">
            <label className="label">
              Primer nombre <input type="text" name="" className="Border-2" />{" "}
              Segundo nombre <input type="text" name="" className="Border-2" />
            </label>
            <label className="label">
              Primer apellido <input type="text" name="" className="Border-2" />{" "}
              Segundo apellido{" "}
              <input type="text" name="" className="Border-2" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <label className="label-2">
              Cargo <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <label className="label-2">
              Dirección laboral <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Barrio
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Ciudad/Municipio
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Departamento
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              País
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-5">
          <Col className="column">
            <label className="label-4">
              Teléfono laboral
              <input type="text" name="" className="Border" />
            </label>
            <label className="label-4">
              Ext
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-3">
          <Col className="column">
            <label className="label-2">
              Celular
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12 mb-4">
          <Col className="column">
            <label className="label-2">
              Correo electrónico laboral
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12 ">
          <Col className="column">
            <h5 className="Titulo">Información de socios o accionistas</h5>
            <label className="label">
              <p className="Texto">
                ¿Tienes socios o accionistas con participación directa o
                indirecta superior al 5%?
              </p>
              *Sí
              <input type="checkbox" name="" className="" />
            </label>
            <label className="label">
              No
              <input type="checkbox" name="" className="" />
            </label>
          </Col>
        </div>
        <div className="col-md-12 ">
          <Col className="column">
            <label className="label">
              <p className="Texto">
                ¿Tienes socios o accionistas con participación directa o
                indirecta igual o inferior al 5% y que tengan control sobre la
                entidad?
              </p>
              *Sí
              <input type="checkbox" name="" className="" />
            </label>
            <label className="label">
              No
              <input type="checkbox" name="" className="" />
            </label>
          </Col>
        </div>
        <div className="col-md-12 ">
          <Col className="column">
            <label className="label">
              <p className="">
                *Si alguna de las respuestas es afirmativa, adjunte a esta
                solicitud el anexo de Conocimiento Socios o Accionistas.
              </p>
            </label>
          </Col>
        </div>
        <div className="col-md-7">
          <Col className="column">
            <h5 className="Titulo-4">
              Información de un contacto en la entidad (Diligencie esta
              Información para
            </h5>
            <label className="label-2">
              {" "}
              Tipo de documento
              <select className="Select-One">
                <option>Seleccione su documento de identidad</option>
                <option>CC</option>
                <option>Cédula de extranjeria</option>
                <option>Pasaporte</option>
                <option>Carné diplomático</option>
              </select>
            </label>
          </Col>
        </div>

        <div className="col-md-5">
          <Col className="column">
            <h5 className="Titulo-4">
              {" "}
              un contacto diferente al representante legal){" "}
            </h5>
            <label className="label-2">
              N° de documento
              <input type="number" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12">
          <Col className="column">
            <label className="label">
              Primer nombre <input type="text" name="" className="Border-2" />{" "}
              Segundo nombre <input type="text" name="" className="Border-2" />
            </label>
            <label className="label">
              Primer apellido <input type="text" name="" className="Border-2" />{" "}
              Segundo apellido{" "}
              <input type="text" name="" className="Border-2" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <label className="label-2">
              Cargo <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-6">
          <Col className="column">
            <label className="label-2">
              Dirección laboral <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Barrio
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Ciudad/Municipio
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              Departamento
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-4">
          <Col className="column">
            <label className="label-2">
              País
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-5">
          <Col className="column">
            <label className="label-4">
              Teléfono laboral
              <input type="text" name="" className="Border" />
            </label>
            <label className="label-4">
              Ext
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-3">
          <Col className="column">
            <label className="label-2">
              Celular
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>

        <div className="col-md-12 mb-4">
          <Col className="column">
            <label className="label-2">
              Correo electrónico laboral
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>
        <div className="col-md-8 ">
          <Col className="column">
            <h5 className="Titulo">
              Información de la naturaleza y tipo de entidad jurídica
            </h5>
            <label className="label">
              <p className="Texto-2">Naturaleza de la entidad</p>
              <input type="checkbox" name="" className="" /> Privada
            </label>
            <label className="label">
              <input type="checkbox" name="" className="" /> Pública
            </label>
            <label className="label">
              <input type="checkbox" name="" className="" /> Mixta
            </label>
          </Col>
        </div>
        <div className="col-md-4">
          <Col className="column">
            <h5 className="Titulo-3"></h5>
            <label className="label-2">
              Código CIIU <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>
        <div className="col-md-9">
          <Col className="column">
            <label className="label-2">
              Detalle de la actividad económica principal{" "}
              <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>
        <div className="col-md-3">
          <Col className="column">
            <label className="label-2">
              N°. Empleados <input type="text" name="" className="Border" />
            </label>
          </Col>
        </div>
      </form>
    </div>
  );
};

export default PersonaJuridica;
