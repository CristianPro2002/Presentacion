import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Estilos.css";

const PersonaJuridica = () => {
  return (
    <div className="Fondo">
      <h1 className="Titulo-principal">PERSONA JURIDICA</h1>
      <br />
      <br />
      <form className="Contenedor-First">
        <div className="Contenedor-Main">
          <h5 className="Titulo-One">Tipo de solicitud</h5>
          <label className="Checkbox-One">
            <input type="checkbox" name="" className="" /> Vinculación
          </label>
          <label className="Checkbox-Two">
            <input type="checkbox" name="" className="" /> Actualización
          </label>
        </div>

        <div className="Contenedor-One">
          <h5 className="Titulo-Two">Fecha diligenciamiento</h5>
          <label className="Date-One">
            <input type="date" name="" className="" />
          </label>
        </div>
        <br />

        <div className="Contenedor-Two">
          <h5 className="Titulo-Three">Información general de la entidad</h5>
          <label className="Checkbox-Three">
            Tipo de documento <input type="checkbox" name="" className="" /> NIT
          </label>
          <label className="Number-One">
            Nº documento
            <input type="number" name="" className="" />
          </label>
        </div>

        <div className="Contenedor-Three">
          <h5 className="Titulo-Four"></h5>
          <label className="Checkbox-Four">
            <input type="checkbox" name="" className="" /> Fideicomiso{" "}
            <h7 className="Aviso">
              {" "}
              Este campo es diligenciado por el Grupo Bancolombia
            </h7>
          </label>
          <label className="Number-Two">
            Nº de fideicomiso <input type="number" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Four">
          <label className="Text-One">
            Nombre o razón social <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Five">
          <label className="Text-Two">
            Nombre corto o sigla
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Six">
          <label className="Date-Two">
            Fecha de constitución <input type="date" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Seven">
          <label className="Text-Three">
            Ciudad de constitución <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Eight">
          <label className="Text-Four">
            Pais de constitución <input type="text" name="" className="" />
          </label>
        </div>
        <div className="Contenedor-Nine">
          <label className="Text-Five">
            Dirección sede principal
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Main-Ten">
        <div className="Sub-Contenedor">
        <div className="Contenedor-Ten">
          <label className="Text-Six">
            Barrio
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        <div className="Container-Main-Eleven">
        <div className="Contenedor-Eleven">
          <label className="Text-Seven">
            Ciudad/Municipio
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        <div className="Container-Main-Twelve">
        <div className="Contenedor-Twelve">
          <label className="Text-Eight">
            Departamento
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        
        </div>
        <div className="Contenedor-Thirteen">
          <label className="Text-Nine">
            País
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Main-Fourteen">
        <div className="Contenedor-Fourteen">
          <label className="Text-Ten">
            Teléfono
            <input type="text" name="" className="" />
          </label>
          <div className="Contenedor-Ext" >
          <label className="Text-Eleven">
            Ext
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        </div>
        <div className="Contenedor-Fifteen">
          <label className="Text-Twelve">
            Correo electrónico sede principal
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <br />

        <div className="Contenedor-Sixteen ">
          <h5 className="Titulo-Five">Información del representante legal</h5>
          <label className="Name-Select">
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
          <br />
        </div>
        <div className="Contenedor-Seventeen">
          <label className="Number-Three">
            N° de documento
            <input type="number" name="" className="" />
          </label>
        </div>
        <div className="Contenedor-Eighteen">
          <label className="Text-Thirteen">
            Primer nombre <input type="text" name="" className="Tamaño-1" /> Segundo
            nombre <input type="text" name="" className="Tamaño-2" />
          </label>
          <div className="Contenedor-Nineteen">
            <label className="Text-Fourteen">
              Primer apellido <input type="text" name="" className="Tamaño-3" /> Segundo
              apellido <input type="text" name="" className="Tamaño-4" />
            </label>
          </div>
          <br />
        </div>
        <div className="Contenedor-Seven">
          <label className="Text-Three">
            Cargo <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Eight">
          <label className="Text-Four">
            Dirección laboral <input type="text" name="" className="" />
          </label>
        </div>
      <div className="Contenedor-Main-Ten">
      <div className="Sub-Contenedor">
        <div className="Contenedor-Ten">
          <label className="Text-Six">
            Barrio
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        <div className="Container-Main-Eleven">
        <div className="Contenedor-Eleven">
          <label className="Text-Seven">
            Ciudad/Municipio
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        <div className="Container-Main-Twelve">
        <div className="Contenedor-Twelve">
          <label className="Text-Eight">
            Departamento
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        </div>
        </div>
        <div className="Contenedor-Twenty">
          <label className="Text-Fifteen">
            País
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Twenty-One">
          <label className="Text-Sixteen">
            Teléfono laboral
            <input type="text" name="" className="" />
          </label>
          <label className="Text-Seventeen">
            Ext
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <div className="Contenedor-Twenty-Two">
          <label className="Text-Eighteen">
            Celular
            <input type="text" name="" className="" />
          </label>
        </div>
        <div className="Contenedor-Fifteen">
          <label className="Text-Twelve">
            Correo electrónico laboral
            <input type="text" name="" className="" />
          </label>
          <br />
        </div>
        <br />
      </form>
    </div>
  );
};

export default PersonaJuridica;
