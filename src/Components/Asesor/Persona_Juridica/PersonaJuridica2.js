import React from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./Estilos.css";
import { useHistory } from "react-router-dom";

const PersonaJuridica2 = () => {
  let History = useHistory();

  let Checked = null;
  for (let CheckBox of document.getElementsByClassName("only-one")) {
    CheckBox.onclick = function () {
      if (Checked != null) {
        Checked.checked = false;
        Checked = CheckBox;
      }
      Checked = CheckBox;
    };
  }

  return (
    <div className="FONDO">
      <div>
        <Button onClick={() => History.push("/Asesor2")} className="REGRESAR">
          {" 🡨 "}
        </Button>
      </div>
      <div className="hijo">
        <h1 className="Titulo-principal">PERSONA JURIDICA</h1>
        <form className="row red-red">
          <div className="col-md-8 mb-1 " id="Container-1">
            <Col>
              <h5 className="Titulo">Tipo de solicitud</h5>
              <label className="label-5">
                <input
                  type="checkbox"
                  name="Vinculación"
                  id="Vinculación"
                  value="1"
                  className="only-one cursor-pointer"
                />{" "}
                Vinculación
              </label>
              <label className="label-5">
                <input
                  type="checkbox"
                  name="Actualización"
                  id="Actualización"
                  value="2"
                  className="only-one cursor-pointer"
                />{" "}
                Actualización
              </label>
            </Col>
          </div>

          <div className="col-md-4 mb-1" id="Container-1">
            <Col>
              <h5 className="Titulo">Fecha diligenciamiento</h5>
              <label className="label">
                <input type="date" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <div>
                <h5 className="Titulo">Información general de la entidad</h5>
              </div>
              <div className="label-13">
                <label className="">
                  Tipo de documento{" "}
                  <input type="checkbox" name="" className="" /> NIT
                </label>
              </div>
              <label className="label-2">
                Nº documento
                <input type="number" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <div className="label-13">
                <label className="label-14">
                  <input type="checkbox" name="" className="" /> Fideicomiso{" "}
                  <h7 className="Aviso">
                    {" "}
                    Este campo es diligenciado por el Grupo Bancolombia
                  </h7>
                </label>
              </div>
              <label className="label-6">
                Nº de fideicomiso{" "}
                <input type="number" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Nombre o razón social{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <label className="label-2">
                Nombre corto o sigla
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <label className="center">
                Fecha de constitución{" "}
                <input type="date" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad de constitución{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Pais de constitución{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Dirección sede principal
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Barrio
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad/Municipio
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Departamento
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-6">
                País
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
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

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Correo electrónico sede principal
                <input type="text" name="" className="Border" />
              </label>
            </Col>
            <br />
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <div>
                <h5 className="Titulo">Información del representante legal</h5>
              </div>
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

          <div className="col-md-5" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label-2">
                N° de documento
                <input type="number" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label">
                Primer nombre <input type="text" name="" className="Border" />{" "}
              </label>
              <label className="label">
                Segundo nombre <input type="text" name="" className="Border" />
              </label>
            </Col>
            <Col>
              <label className="label">
                Primer apellido <input type="text" name="" className="Border" />{" "}
              </label>
              <label className="label">
                Segundo apellido{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Cargo <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Dirección laboral{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Barrio
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad/Municipio
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Departamento
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                País
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
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

          <div className="col-md-3" id="Container-1">
            <Col>
              <div>
                <label className="label-2">
                  Celular
                  <input type="text" name="" className="Border-3" />
                </label>
              </div>
            </Col>
          </div>

          <div className="col-md-12 mb-4" id="Container-1">
            <Col>
              <label className="label-2">
                Correo electrónico laboral
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">Información de socios o accionistas</h5>
              <div>
                <p className="Texto label">
                  ¿Tienes socios o accionistas con participación directa o
                  indirecta superior al 5%?
                  <label className="label-16">
                    *Sí <input type="checkbox" name="" className="" />
                  </label>
                  <label className="label">
                    No <input type="checkbox" name="" className="" />
                  </label>
                </p>
              </div>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <div>
                <p className="Texto label">
                  ¿Tienes socios o accionistas con participación directa o
                  indirecta igual o inferior al 5% y que tengan control sobre la
                  entidad?
                  <label className="label">
                    *Sí <input type="checkbox" name="" className="" />
                  </label>
                  <label className="label">
                    No <input type="checkbox" name="" className="" />
                  </label>
                </p>
              </div>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <div>
                <p className="Texto-3">
                  <label className="label-23">
                    *Si alguna de las respuestas es afirmativa, adjunte a esta
                    solicitud el anexo de Conocimiento Socios o Accionistas.
                  </label>
                </p>
              </div>
            </Col>
          </div>
          <div className="col-md-7" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Información de un contacto en la entidad
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

          <div className="col-md-5" id="Container-1">
            <Col>
              <h5 className="Titulo-7">
                {" "}
                (Diligencie esta Información para un contacto diferente al
                representante legal){" "}
              </h5>
              <label className="label-2">
                N° de documento
                <input type="number" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label">
                Primer nombre <input type="text" name="" className="Border" />{" "}
              </label>
              <label className="label">
                Segundo nombre <input type="text" name="" className="Border" />
              </label>
            </Col>
            <Col>
              <label className="label">
                Primer apellido <input type="text" name="" className="Border" />{" "}
              </label>
              <label className="label">
                Segundo apellido{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Cargo <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Dirección laboral{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Barrio
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad/Municipio
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Departamento
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-9">
                País
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
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

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label-2">
                Celular
                <input type="text" name="" className="Border-3" />
              </label>
            </Col>
          </div>

          <div className="col-md-12 mb-4" id="Container-1">
            <Col>
              <label className="label-2">
                Correo electrónico laboral
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-8" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Información de la naturaleza y tipo de entidad jurídica
              </h5>
              <div className="Div">
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
              </div>
            </Col>
          </div>
          <div className="col-md-4" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label">
                Código CIIU <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-9" id="Container-1">
            <Col>
              <label className="label-2">
                Detalle de la actividad económica principal{" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label-6">
                N°. Empleados <input type="text" name="" className="Border-3" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Sociedad comercial o civil
                <select className="Select-One">
                  <option>Por acciones simplificadas S.A.S</option>
                  <option>Anónima</option>
                  <option>Limitada</option>
                  <option>En comandita simple</option>
                  <option>En comandita por acciones</option>
                  <option>Sin animo de lucro</option>
                  <option>Surcusal de sociedad extranjera</option>
                  <option>Empresa unipersonal</option>
                  <option>Asociación civil</option>
                  <option>Sociedad de hecho</option>
                  <option>Colectiva</option>
                  <option>Ninguna</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                    <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Tipo de entidad/asociación
                <select className="Select-One">
                  <option>Establecimiento público</option>
                  <option>Empresa industrial y comercial del estado</option>
                  <option>Sociedad de economía mixta</option>
                  <option>Empresa social del estado</option>
                  <option>Empresa servicios públicos domiciliarios</option>
                  <option>Entidades financieras</option>
                  <option>Fondos mutuos de inversión</option>
                  <option>Fondos de empleados</option>
                  <option>Cooperativas</option>
                  <option>Precooperativas</option>
                  <option>Copropiedades</option>
                  <option>Personas jurídicas de derecho canónico</option>
                  <option>Entidades religiosas no católicas</option>
                  <option>Sindicatos</option>
                  <option>Fundaciones</option>
                  <option>Corporaciones y asociaciones</option>
                  <option>Partido político</option>
                  <option>*Consorcio</option>
                  <option>*Unión temporal</option>
                </select>
                <Col className="">
                  <label className="label-2">
                    <p className="">
                      *Si el tipo de entidad es Consorcio o Unión temporal
                      diligencie el anexo Conocimiento del Cliente Consorcio o
                      Unión temporal.
                    </p>
                  </label>
                  <label className="label-12">
                    <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                    <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Entidades estatales descentralizadas de orden
                <select className="Select-One">
                  <option>Nación</option>
                  <option>Departamento</option>
                  <option>Municipio</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                    <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Entidades estatales descentralizadas de orden
                <select className="Select-One">
                  <option>Nacional</option>
                  <option>Departamental</option>
                  <option>Municipal</option>
                </select>
              </label>
            </Col>
            <br />
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo">Información financiera </h5>
              <label className="label-2">
                Ingresos operacionales mensuales
              </label>
              <label className="label float-left">
                {" "}
                $ <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label-2">
                Ingresos no operacionales mensuales
              </label>
              <label className="label float-left">
                {" "}
                $ <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Detalle de ingresos no operacionales u originados en actividades
                diferentes a la principal
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <label className="label-18">
                Ventas anuales ${" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <label className="label-11">
                Fecha de cierre de ventas{" "}
                <input type="date" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-18">
                Egresos mensuales ${" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-18">
                Utilidad neta $ <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-18">
                Total activos $ <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">Total pasivos</label>
              <label className="label float-left">
                {" "}
                $ <input type="text" size="30" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">Total patrimonio </label>
              <label className="label float-left">
                {" "}
                $ <input type="text" size="30" name="" className="Border" />
              </label>
            </Col>
            <br />
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <h5 className="Titulo">Información tributaria</h5>
              <label className="label-2">
                {" "}
                Tipo de contribuyente
                <select className="Select-One">
                  <option>
                    Persona juridicas, comerciales y civiles, consorcios y
                    uniones temporales.
                  </option>
                  <option>
                    Corporaciones, fundaciones y asociaciones sin ánimo de lucro
                  </option>
                  <option>Entidad pública nacional o territorial</option>
                  <option>Cooperativa</option>
                  <option>No contribuyente</option>
                </select>
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label">Clase de contribuyente</label>
              <label className="label">
                <input type="checkbox" name="" className="Border" /> Gran
                contribuyente{" "}
                <input type="checkbox" name="" className="Border" /> No gran
                contribuyente
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">Responsable de iva</label>
              <label className="label">
                <input type="checkbox" name="" className="Border" /> Si{" "}
                <input type="checkbox" name="" className="Border" /> No
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">Autorretenedor otros ingresos</label>
              <label className="label">
                <input type="checkbox" name="" className="Border" /> Si{" "}
                <input type="checkbox" name="" className="Border" /> No
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">
                Intermediario del mercado cambiario
              </label>
              <label className="label">
                <input type="checkbox" name="" className="Border" /> Si{" "}
                <input type="checkbox" name="" className="Border" /> No
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">
                Es vigilado por la superintendencia financiera
              </label>
              <label className="label">
                <input type="checkbox" name="" className="Border" /> Si{" "}
                <input type="checkbox" name="" className="Border" /> No
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-12">
                Obligado a tributar en Estados Unidos
              </label>
              <div className="Div">
                <label className="label">
                  <input type="checkbox" name="" className="Border" /> *Si{" "}
                  <input type="checkbox" name="" className="Border" /> No
                </label>
              </div>

              <p>
                <label className="label-12">
                  *Si su respuesta es afirmativa indique el número de ID
                  tributario (TIN)
                  <label className="label">
                    <input type="text" name="" className="Border" />
                  </label>
                </label>
              </p>
            </Col>
          </div>

          <div className="col-md-12 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                <p>
                  {" "}
                  Si está obligado a tributar en otro país{" "}
                  <label className="color">diferente a Colombia,</label> indique
                  cuál (es):
                </p>
              </label>

              <div className="col-md-12">
                <Col>
                  <label className="label">
                    1. <input type="text" name="" className="Border" />
                  </label>
                  <label className="label">
                    <p className="Texto-3">N°. Id. Tributario</p>
                    1. <input type="text" name="" className="Border" />
                  </label>
                </Col>
                <Col>
                  <label className="label">
                    2. <input type="text" name="" className="Border" />{" "}
                  </label>
                  <label className="label">
                    2. <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </div>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Declaración de origen de bienes y/o fondos
              </h5>
              <label className="label-2">
                {" "}
                <p>
                  {" "}
                  Declaro que: <label className="color">i)</label> El origen de
                  mis bienes proviene de:{" "}
                </p>
                <select className="Select-One">
                  <option>Compraventa</option>
                  <option>Aporte de socios</option>
                  <option>Utilidades</option>
                </select>
                <label className="label-12">
                  <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                  <input type="text" name="" className="Border" />
                </label>
              </label>

              <label className="label-2">
                <p>
                  <label className="color">ii)</label> Los recursos que entregue
                  provienen de la siguiente fuente:
                </p>
                <select className="Select-One">
                  <option>Capitalización por parte de socios</option>
                  <option>Desarrollo del objeto social</option>
                  <option>Utilidades del negocio</option>
                </select>
                <label className="label-12">
                  <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                  <input type="text" name="" className="Border" />
                </label>
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-6">El país origen</h5>
              <label className="label-2">
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-6">
                La ciudad origen de bienes y/o fondos
              </h5>
              <label className="label-2">
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <p className="Texto-3">
                <label className="color">iii)</label> No permitiré el depósito
                de recursos a mis cuentas o a las cuentas de mi representada,
                por parte de terceros producto de actividades ilícitas;{" "}
                <label className="color">iv)</label> No realizaré transferencias
                de recursos a cuentas de personas relacionadas con actividades
                ilícitas; <label className="color">v)</label> En la constitución
                de Negocios Fiduciarios declaro que los bienes entregados se
                detallaran en el contrato o documentos de apertura del producto.
                Todo lo anterior de acuerdo con el marco legal aplicable
                nacional e internacional.
              </p>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">Declaración naturaleza de los recursos</h5>
              <p className="Texto-3">
                <label className="color">vi)</label> En las cuentas de las
                cuales sea titular mi representada, se manejan recursos públicos
                de naturaleza inembargable:
                <label className="padding">
                  <input type="checkbox" name="" className="Border" /> *Sí{" "}
                  <input type="checkbox" name="" className="Border" /> No
                </label>
                <br />
                *En caso de responder afirmativamente favor diligenciar el anexo
                de Declaración Naturaleza de los Recursos. Todo lo anterior de
                acuerdo con el marco legal aplicable nacional e internacional.
              </p>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Información de operaciones internacionales
              </h5>
              <label className="label-18">
                ¿Realiza operaciones en moneda extranjera?
                <label className="label padding">
                  {" "}
                  <input type="checkbox" name="" className="Border" /> Sí{" "}
                  <input type="checkbox" name="" className="Border" /> No
                </label>
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                ¿Cuál(es) de las siguientes operaciones realiza en moneda
                extranjera?
              </label>
              <label className="label-2">
                <select className="Select-One">
                  <option>Exportador e importador</option>
                  <option>Pago de servicios</option>
                  <option>Préstamos</option>
                  <option>Exportador</option>
                  <option>Importador</option>
                  <option>Inversiones</option>
                  <option>Envío/Recepción de giros y remesas</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                    <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo-6">
                Descripción de los productos financieros en moneda extranjera
              </h5>
              <label className="label-2">
                Nombre de la entidad
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Tipo de producto
                <select className="Select-One">
                  <option>Cuenta de ahorro</option>
                  <option>Cuenta corriente</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                    <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </label>
            </Col>
          </div>

          <div className="col-md-6">
            <Col className="column">
              <label className="center">
                N° de Producto <input type="text" name="" className="Border" />
              </label>
            </Col>

            <Col className="Col-4">
              <label className="center">
                Monto mensual promedio ${" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Moneda
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                país
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Nombre de la entidad
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Tipo de producto
                <select className="Select-One">
                  <option>Cuenta de ahorro</option>
                  <option>Cuenta corriente</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    <input type="checkbox" name="" className="" /> Otra, ¿cuál?{" "}
                    <input type="text" name="" className="Border" />
                  </label>
                </Col>
              </label>
            </Col>
          </div>

          <div className="col-md-6">
            <Col className="column">
              <label className="center ">
                N° de Producto <input type="text" name="" className="Border" />
              </label>
            </Col>

            <Col className="Col-4">
              <label className="center">
                Monto mensual promedio ${" "}
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-4 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                Moneda
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>

          <div className="col-md-4 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                país
                <input type="text" name="" className="Border" />
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">Autorizaciones y declaraciones</h5>
              <p className="Texto-3">
                * LAS ENTIDADES: entiéndase como BANCOLOMBIA S.A. y cada una de
                las entidades que pertenezcan o llegaren a pertenecer a su Grupo
                Empresarial, a sus filiales y/o subsidiarias en virtud de la
                presente Solicitud Única de Grupo; y a las entidades en las
                cuales éstas, directa o indirectamente tengan participación
                accionaria o sean asociados, domiciliadas en Colombia y/o en el
                exterior.
              </p>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo-6">Tratamiento de datos personales</h5>
              <p className="Texto-3">
                Autorizo en forma permanente a LAS ENTIDADES, o a quienes
                representen sus derechos u ostenten en el futuro la calidad de
                acreedor, cesionario, o cualquier calidad frente a mi o frente a
                la persona que represento, como titular de la información, en
                adelante LAS ENTIDADES y en virtud de la Solicitud Única de
                Grupo, para que realicen los tratamientos que se indican a
                continuación, por considerarse necesarios e inherentes para el
                cumplimiento de la ley, el funcionamiento de la operación
                financiera, el ofrecimiento y administración de productos y/o
                servicios, entre otros:{" "}
                <p className="color">
                  I. Autorizaciones necesarias para el desarrollo de la
                  actividad de LAS ENTIDADES. LAS ENTIDADES están autorizadas
                  para que:{" "}
                </p>{" "}
                <label className="color">(i)</label> soliciten, almacenen,
                consulten, compartan, informen, reporten, rectifiquen, procesen,
                modifiquen, actualicen, aclaren, retiren o divulguen, ante
                operadores de información, riesgo y de seguridad social y
                parafiscales, o ante cualquier otra entidad que maneje o
                administre bases de datos en Colombia y en el exterior, todo lo
                referente a mi información financiera, comercial y crediticia y
                aquella relacionada con la liquidación o pago de aportes al
                sistema de seguridad social y parafiscales (presente, pasada y
                futura) o de mi representada, incluyendo mis datos biométricos o
                de mi representada, y aquella relacionada con los derechos y
                obligaciones originados en virtud de cualquier contrato
                celebrado u operación que haya llegado o llegare a celebrar o
                realizar yo o la persona que represento, con cualquiera de LAS
                ENTIDADES. <label className="color">(ii)</label> accedan,
                recolecten, procesen, actualicen, conserven, compartan y
                destruyan mi información y documentación o la de la persona que
                represento, incluso cuando no se haya perfeccionado una relación
                contractual o después de finalizada la misma.{" "}
                <label className="color">(iii)</label> suministren, consulten,
                verifiquen y compartan la información financiera, comercial,
                crediticia mía o de mi representada y/o mis datos biométricos o
                de mi representada, con contratistas o cualquier otra entidad
                nacional o extranjera que preste servicios de verificación o
                análisis de administración de riesgo; y actualicen mi
                información o la de mi representada, de acuerdo con el análisis
                realizado. <label className="color">(iv)</label> compilen y
                remitan a las autoridades competentes, incluyendo las fiscales y
                los reguladores financieros, nacionales o extranjeros, la
                información relacionada con la titularidad de los productos y
                servicios contratados o que llegare a contratar yo y/o mi
                representada; datos de contacto, movimientos, saldos, y toda
                aquella información mía y/o de mi representada que reposare en
                la entidad que sea solicitada por las normas nacionales o
                extranjeras. <label className="color">(v)</label> consulten
                multas y sanciones a mi cargo o a cargo de mi representada ante
                las diferentes autoridades administrativas y judiciales.{" "}
                <label className="color">(vi)</label> consulten, soliciten o
                verifiquen la información sobre mis activos, bienes o derechos
                míos o de mi representada en entidades públicas o privadas, o
                que conozcan personas naturales o jurídicas, o que se encuentren
                en buscadores públicos, redes sociales o publicaciones físicas o
                electrónicas, bien fuere en Colombia o en el exterior.{" "}
                <label className="color">(vii)</label> Compartan, transmitan,
                transfieran y divulguen información y documentación mía o de mi
                representada aquí suministrada y cualquier información necesaria
                y relacionada con el presente trámite de financiación con las
                siguientes personas: la constructora del inmueble a financiar,
                la inmobiliaria, la fiduciaria que actúe como vocera y
                administradora del Fideicomiso enajenante del inmueble, los
                abogados externos a cargo del estudio de títulos del inmueble y
                la entidad titularizadora en caso de titularización de mi
                crédito o el de mi representada;{" "}
                <label className="color">(viii)</label> Consulten, soliciten o
                verifiquen mi información de ubicación o contacto o de mi
                representada en entidades públicas o privadas.
                <p className="color">
                  II. Autorizaciones por la naturaleza del producto y/o
                  servicio. LAS ENTIDADES están autorizadas para que:{" "}
                </p>{" "}
                a nivel nacional e internacional compartan, transmitan,
                transfieran y divulguen mi información y documentación y/o la de
                mi representada, siempre que por la naturaleza del producto o
                servicio adquirido se requiera este tratamiento, con las
                siguientes personas: <label className="color">(a)</label>{" "}
                quienes ofrezcan, presten o suministren bienes y servicios a LAS
                ENTIDADES para la adecuada prestación de sus productos o
                servicios; o a quienes en alianza ofrezcan productos o servicios
                que conllevan beneficios para mí y/o para mi representada en
                virtud de productos que tengo con LAS ENTIDADES; o a las
                remesadoras con las cuales LAS ENTIDADES han celebrado convenios
                para la gestión y entrega de recursos enviados del exterior;{" "}
                <label className="color">(b)</label> entidades con las cuales
                tengan celebrados o celebren a futuro contratos de uso de red;{" "}
                <label className="color">(c)</label> la(s) aseguradora(s) con
                la(s) cual(es) LAS ENTIDADES tengan contratadas pólizas o con
                las cuales yo y/o mi representada haya decidido contratarlas,
                los intermediarios de seguros o reaseguros;{" "}
                <label className="color">(d)</label> el comercializador o
                proveedor de los bienes o servicios financiados por LAS
                ENTIDADES; <label className="color">(e)</label> los terceros
                contratados por LAS ENTIDADES para la cobranza y/o que realizan
                investigación de bienes y derechos tanto míos como de mi
                representada; <label className="color">(f)</label> las entidades
                que realizan pagos de subsidios o beneficios a mi favor y/o de
                mi representada; <label className="color">(g)</label> los
                terceros contratados por LAS ENTIDADES o personas que en virtud
                de cualquier relación contractual con dichos terceros, llevan a
                cabo avalúos; <label className="color">(h)</label> las entidades
                operadoras de sistemas de pago de alto y bajo valor y demás
                entidades nacionales o internacionales que participan en dichos
                sistemas; <label className="color">(i)</label> las entidades de
                corresponsalía en el exterior y/o bancos corresponsales en
                virtud de las operaciones realizadas a través de, o con estas
                entidades; <label className="color">(j)</label> las personas que
                estén interesadas en la adquisición de cartera de LAS ENTIDADES
                o que la adquieran a cualquier título;{" "}
                <label className="color">(k)</label> las bolsas de valores,
                administradores de sistemas de negociación y registro, a los
                proveedores de precios, a los organismos de autorregulación, los
                depósitos de valores, entidades que custodian valores y demás
                proveedores de infraestructura del mercado de valores, para que
                recopilen, administren, intercambien información entre ellos y
                la pongan en circulación en el mercado de valores;{" "}
                <label className="color">(l)</label> las entidades de
                redescuento en virtud de las operaciones realizadas con las
                mismas; <label className="color">(m)</label> a quienes son
                contratados para la realización de actividades de educación
                financiera; <label className="color">(n)</label> la entidad
                administradora del programa de lealtad de LAS ENTIDADES, para
                que me contacten o contacten a mi representada para ofrecer,
                vincular, promocionar, gestionar dicho programa, y los puntos y
                beneficios asociados a éste.{" "}
                <p className="color">
                  III. Autorizaciones para fines comerciales, el ofrecimiento y
                  administración de productos y/o servicios. LAS ENTIDADES están
                  autorizadas para que:{" "}
                </p>{" "}
                <label className="color"> i) </label> Me contacten a mí o a mi
                representada vía telefónica, mensajería instantánea directamente
                o a través de sus proveedores, me envíen mensajes por cualquier
                medio, así como correos electrónicos y redes sociales;{" "}
                <label className="color"> ii) </label> Compartan mi información
                o la de mi representada con proveedores o aliados;{" "}
                <label className="color"> iii) </label> Consulten, soliciten o
                verifiquen mi información de ubicación o contacto o la de mi
                representada en entidades públicas o privadas, en Colombia o en
                el exterior. Los anteriores tratamientos, además de considerar
                las finalidades antes señaladas, también consideran las
                siguientes: para que LAS ENTIDADES:{" "}
                <label className="color">(a)</label> Conozcan mi comportamiento
                financiero, comercial y crediticio, y todo lo relacionado con la
                liquidación o pago de aportes al sistema de seguridad social y
                parafiscales, y el cumplimiento de mis obligaciones legales o de
                mi representada; <label className="color">(b) </label> Realicen
                todas las gestiones necesarias tendientes a confirmar y
                actualizar la información mía o de mi representada;{" "}
                <label className="color">(c) </label> Validen y verifiquen mi
                identidad o la de mi representada para el ofrecimiento y
                administración de productos y servicios, así mismo para que se
                compartan la información; <label className="color"> (d) </label>{" "}
                Establezcan, mantengan, terminen una relación contractual y
                actualicen mi información o la de mi representada;{" "}
                <label className="color"> (e) </label> Ofrezcan y presten sus
                productos o servicios a través de cualquier medio o canal para
                mi beneficio y el de mi representada y de acuerdo con el perfil
                de cada uno; <label className="color">(f)</label> Realicen una
                adecuada prestación y administración de los servicios
                financieros, incluyendo la gestión de cobranza;{" "}
                <label className="color">(g)</label> Suministren información
                comercial, legal, de productos, de seguridad, de servicio o de
                cualquier otra índole; <label className="color">(h)</label>{" "}
                Conozcan mi ubicación y datos de contacto o los de mi
                representada para efectos de notificaciones con fines de
                seguridad y ofrecimiento de beneficios y ofertas comerciales;{" "}
                <label className="color">(i)</label> Efectúen análisis e
                investigaciones comerciales, estadísticas, de riesgos, de
                mercado, interbancaria y financiera incluyendo contactarme o
                contactar a mi representada para estos fines. <br />
                <label className="color"> Revocatorias. </label> Sin perjuicio
                de las autorizaciones que he otorgado a LAS ENTIDADES para el
                tratamiento de datos personales, declaro que conozco el derecho
                que me asiste para revocar en los términos que prevé la ley,
                cualquiera de las siguientes autorizaciones:{" "}
                <label className="color">(i)</label> envío de mensajes de texto
                para ofertas comerciales; <label className="color">(ii)</label>{" "}
                envío de correos electrónicos para ofertas comerciales;{" "}
                <label className="color">(iii)</label> oferta comercial por
                televentas de productos que no poseo en LAS ENTIDADES; y{" "}
                <label className="color">(iv)</label> compartir información con
                terceros aliados para que estos ofrezcan sus productos, a través
                de los canales de LAS ENTIDADES.
              </p>
            </Col>
          </div>
          <div className="col-md-12 mb-2" id="Container-1">
            <Col>
              <p className="Texto-3">
                <label className="color"> Antilavado y anticorrupción. </label>{" "}
                Nos obligamos con LAS ENTIDADES a implementar las medidas
                tendientes a evitar que sus operaciones puedan ser utilizadas
                como instrumentos para el ocultamiento, manejo, inversión o
                aprovechamiento en cualquier forma de dinero u otros bienes
                provenientes de actividades ilícitas o para dar apariencia de
                legalidad a estas actividades. En tal sentido, declaro (amos)
                conocer y aceptar (amos) que LAS ENTIDADES podrán dar por
                terminado de manera unilateral e inmediata la relación comercial
                existente, sin que haya lugar al pago de indemnización alguna
                por parte de LAS ENTIDADES cuando, la sociedad, sus asociados
                directos e indirectos con una participación mayor o igual al 5%
                en el capital social, o sus directivos o agentes en condición de
                tales, en cualquier tiempo hayan sido o llegaren a ser:{" "}
                <label className="color"> i) </label> condenado(s) por parte de
                las autoridades competentes por el delito de lavado de activos,
                los delitos fuente de éste, incluidos los delitos contra la
                administración pública o el delito de financiación del
                terrorismo o administración de recursos relacionados con
                actividades terroristas; <label className="color">ii) </label>{" "}
                sancionado(s) administrativamente por violaciones a cualquier
                norma anticorrupción; <label className="color"> iii) </label>{" "}
                incluido(s) en listas administradas por cualquier autoridad
                nacional o extranjera para el control de lavado de activos y/o
                financiación del terrorismo y/o corrupción en cualquiera de sus
                modalidades; <label className="color">iv) </label> vinculado(s)
                a cualquier tipo de investigación, proceso judicial o
                administrativo, adelantado por las autoridades competentes del
                orden nacional o extranjero, por la presunta comisión de delitos
                o infracciones relacionadas con el lavado de activos, delitos
                fuente de lavado de activos, incluidos delitos contra la
                administración pública, y/o financiación del terrorismo o
                administración de recursos relacionados con actividades
                terroristas. Igualmente cuando llegare a incumplir la obligación
                de actualización de información establecida por la Entidad.{" "}
                <br />
                <label className="color">Información. </label> Declaramos que:{" "}
                <label className="color">i) </label> esta información es cierta,
                puede ser utilizada para el proceso de actualización y es
                verificable en cualquier momento y nos comprometemos a
                actualizarla o confirmarla al menos una vez al año o cada vez
                que un producto o servicio lo amerite. Igualmente nos obligamos
                a informarles cualquier cambio relacionado con los datos de
                contacto, residencia fiscal, domicilio y actividad comercial,
                dentro de los 20 días siguientes a la fecha en que se produjo el
                cambio. <label className="color"> ii) </label> para la
                actualización solo diligenciamos la información que ha cambiado
                en el último año, en consecuencia la información no diligenciada
                permanece vigente; <label className="color"> iii) </label>{" "}
                Conocemos que la presentación de esta solicitud no implica
                compromiso de LAS ENTIDADES para autorizar la vinculación y/
                actualización. <label className="color"> iv) </label> Aceptamos
                que cualquier inexactitud detectada, cancelará el proceso de
                vinculación y/o actualización solicitado;{" "}
                <label className="color"> v) </label> Autorizamos a LAS
                ENTIDADES la destrucción de este formulario, de los documentos
                soportes de la solicitud en el evento de que el proceso
                vinculación y/o actualización haya sido desfavorable. <br />
                <label className="color">
                  Producto, costos y tarifas.{" "}
                </label>{" "}
                Declaro que he conocido las características y condiciones de los
                productos o servicios para los cuales estoy solicitando la
                vinculación y/o actualización, las cuales podré consultar en las
                oficinas y en la página web de LAS ENTIDADES. <br />
                <label className="color"> Fogafin. </label> Declaro que me ha
                sido suministrada la información concerniente al seguro de
                depósitos del Fondo de Garantías de Instituciones Financieras
                FOGAFIN, y que la misma está a mi disposición en la página web
                de LAS ENTIDADES. <br />
                <label className="color">Débito automático. </label> Autorizo a
                LAS ENTIDADES o a quien represente sus derechos u ostente en el
                futuro la calidad de acreedor hasta la cancelación total de la
                obligación, para debitar de la cuenta designada y de cualquier
                depósito a mi nombre o de mi representada en LAS ENTIDADES, el
                valor total de las cuotas de amortización, cánones, seguros,
                comisiones y demás valores a mi cargo, de conformidad con las
                condiciones previamente acordadas.
                <br />
                <label className="color">Compensación. </label> Autorizo a LAS
                ENTIDADES o a quien represente sus derechos u ostente en el
                futuro la calidad de acreedor, en forma permanente e
                irrevocable, para compensar de cualquier depósito a mi nombre o
                de mi representada, aun cuando ello genere sobregiro, las
                tarifas, comisiones, cánones, cuota (s) de amortización a
                capital, intereses, impuestos, seguros, costos y gastos de
                cobranza judicial y extrajudicial y, demás obligaciones a mi
                cargo por cualquier producto o servicio prestado por LAS
                ENTIDADES.
                <br />
                <label className="color">
                  {" "}
                  Declaración de cambio, monetización.{" "}
                </label>{" "}
                Autorizo a Bancolombia S.A. a monetizar los giros recibidos a mi
                nombre desde el exterior en moneda extranjera que no
                correspondan a operaciones obligatoriamente canalizables y a
                suministrar al Banco de la República la información que yo
                provea a Bancolombia S.A. sobre los datos mínimos de las
                operaciones de cambio por servicios, transferencias y otros
                conceptos (Declaración de Cambio), por cada operación que sea
                monetizada y negociada directamente por Bancolombia S.A.;
                igualmente, lo autorizo para aplicar dichos recursos al pago de
                las cuotas, cánones y demás gastos asociados a todas las
                obligaciones que tenga con el Banco en general y, en especial, a
                mis obligaciones hipotecarias/leasing habitacional, con el
                mismo. Adicionalmente declaro que todos los giros recibidos y
                enviados desde y hacia el exterior corresponden a operaciones de
                cambio no obligatoriamente canalizables.
                <br />
                <label className="color">Correspondencia.</label> Autorizo que
                la correspondencia en general y los extractos me sean enviados a
                través de los medios virtuales, previamente habilitados e
                informados por LAS ENTIDADES. Declaramos conocer y aceptar que
                si deseamos recibirlos por otro medio, podemos solicitarlo a
                través de la sucursal virtual/actualización de datos, o a través
                de la sucursal telefónica.
                <br /> El Reporte Anual de Costos Totales lo deseo recibir
                <label className="padding">
                  Virtual <input type="checkbox" name="" className="Border" />{" "}
                  Fisico <input type="checkbox" name="" className="Border" />
                </label>
                <br />
                <label className="color"> Firma y huella. </label> Autorizo a
                LAS ENTIDADES a que la firma y huella, impuesta en este formato
                puedan ser utilizadas para verificaciones internas y
                cumplimiento a los trámites que por Ley se requiera.
              </p>
            </Col>
          </div>
          <div className="col-md-12 mb-2" id="Container-1">
            <Col>
              <h5 className="Titulo">Medidas de seguridad</h5>
              <p className="Texto-3">
                Declaro que: <label className="color"> i) </label> fui informado
                sobre las medidas y recomendaciones de seguridad que debo
                observar y cumplir al utilizar los diferentes instrumentos y
                canales que ofrecen LAS ENTIDADES para realizar transacciones,
                dentro de las que se encuentran las siguientes: el manejo de
                claves, activación y bloqueos; no aceptar la ayuda de extraños;
                utilizar el servicio de alertas y notificaciones; personalizar
                las transacciones; mantener actualizados mis datos; el manejo de
                la sucursal virtual digitando en todo caso la página web
                completa y no a través de enlaces; el manejo de la sucursal
                virtual a través del celular; mantener actualizado mi computador
                y mi móvil con herramientas de seguridad como antivirus,
                antispyware, firewall personal y del sistema operativo con el
                fin de protegernos de programas que sustraigan información;{" "}
                <label className="color">ii)</label> conozco y comprendo que
                estas medidas y recomendaciones no son las únicas existentes y
                por ello entiendo que puedo consultarlas y estudiarlas
                periódicamente y que las mismas están a mi disposición, entre
                otras, en la página web de LAS ENTIDADES, con el fin de estar
                siempre informado sobre las mismas y prevenir situaciones que
                puedan vulnerar la seguridad de las transacciones y afectarme a
                mí o a mi representada.
              </p>
            </Col>
          </div>
          <div className="col-md-12 mb-2" id="Container-1">
            <p className="Texto-3">
              Se firma en señal de conformidad, entendimiento y aceptación de la
              información aquí consagrada, entre las que se encuentran, las
              Autorizaciones y Declaraciones, en especial la Autorización para
              el Tratamiento de Datos Personales y el derecho a la Revocatoria
              que me asiste en los términos de ley.
            </p>
            <div id="Container-6">
              <label className="label">
                <Col>
                  <p>______________________________</p>
                  <p>Firma del Solicitante</p>
                </Col>
              </label>
            </div>
            <div id="Container-5">
              <Col>
                <label className="label">
                  <canvas id="rectangulo" width="140" height="188">
                    {" "}
                  </canvas>
                </label>
              </Col>
            </div>

            <div className="col-md-8" id="Container-2">
              <Col>
                <label>
                  <p className="label-21">
                    {" "}
                    * Solo diligenciar si actúa en calidad de:{" "}
                  </p>
                  <label className="label-22">
                    <input type="checkbox" name="" className="" /> Representante{" "}
                    <input type="checkbox" name="" className="" /> Apoderado
                  </label>

                  <div className="float-left">
                    <label className="">
                      Nombre <input type="text" name="" className="Border" />
                    </label>
                    <div className="label-19">
                      <input type="text" name="" className="Border" />
                    </div>

                    <label className="label-20">
                      No. Identificación{" "}
                      <input type="text" name="" className="Border" />
                    </label>
                  </div>
                </label>
              </Col>
            </div>
          </div>

          <div className="col-md-12" id="margin-bottom">
            <h5 className="Titulo">
              Para uso exclusivo de las Entidades del Grupo Empresarial
            </h5>
          </div>

          <div className="col-md-4" id="Container-7">
            <label className="Texto-5">
              Código vendedor
              <input type="text" className="Border" />
            </label>
          </div>
          <div className="col-md-4" id="Container-7">
            <label className="Texto-5">
              Nombre
              <input type="text" className="Border" />
            </label>
          </div>
          <div className="col-md-4" id="Container-7">
            <label className="Texto-5">
              Oficina
              <input type="text" className="Border" />
            </label>
          </div>

          <div className="col-md-9" id="Container-1">
            <p className="Texto-3">
              <label className="Subtitulo"> Concepto Comercial:</label> En
              virtud de haber participado en el proceso de conocimiento del
              cliente, reconozco que soy responsable del completo
              diligenciamiento de la información que ha sido consignada de forma
              libre en el presente formato y con la finalidad que LAS ENTIDADES
              adelanten dicho proceso.
            </p>
            <div>
              <label className="Observaciones">
                <p> Observaciones</p>
                <input type="text" className="Border" />
              </label>
            </div>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label>
                <Row className="Row">
                  <p>____________________</p>
                  <p>Firma</p>
                </Row>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="">
            <Button className="BOTON" variant="primary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonaJuridica2;
