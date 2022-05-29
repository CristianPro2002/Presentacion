import React, { useState } from "react";
import "./Estilos.css";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonaNatural = () => {
  let History = useHistory();

  const formik = useFormik({
    initialValues: {
      tiposolicitud: "",
      fecha: "",
      pnombre: "",
      snombre: "",
      panombre: "",
      sanombre: "",
      Tdocumento: "",
      documento: "",
      fechae: "",
      lugare: "",
      nacimiento: "",
      ciudad: "",
      genero: "",
      EstadoCivil: "",
      Nacionalidad: "",
      cajon: "",
      Dir: "",
      bloq: "",
      apca: "",
      Barrio: "",
      CiuMun: "",
      depa: "",
      Pais: "",
      Tel: "",
      Cel: "",
      Email: "",
      Profesion: "",
      Sprofesion: "",
      Dactieco: "",
      Cciiu: "",
      Nempleado: "",
      nombreem: "",
      Direccion: "",
      Bar: "",
      CiMu: "",
      Depa: "",
      Pa: "",
      Phone: "",
      Ex: "",
      Cell: "",
      CorreL: "",
      IngreMensu: "",
      Totalact: "",
      OtrosIngreMensu: "",
      Totalpas: "",
      Detalle: "",
      Totalegre: "",
      Declarnatere: "",
      Agentere: "",
      RegimenIva: "",
      TributarEU: "",
      VentasA: "",
      FechaCierre: "",
      respuestaA: "",
      uno: "",
      unouno: "",
      dos: "",
      dosdos: "",
      declaracion: "",
      paisOrigen: "",
      Ciudadorigen: "",
      monedaE: "",
      Operation: "",
      nombreentidad: "",
      tipodeproducto: "",
      Input: "",
      noProduct: "",
      Montmensu: "",
      MoneDa: "",
      CiudAd: "",
      PAIIS: "",
    },

    validationSchema: Yup.object({
      fecha: Yup.date().default(function () {
        return new Date();
      }),
      pnombre: Yup.string()
        .required("Este campo es obligatorio")
        .max(10, `Maximo 10 caracteres`),
      snombre: Yup.string().max(10, `Maximo 10 caracteres`),
      panombre: Yup.string()
        .required("Este campo es obligatorio")
        .max(10, `Maximo 10 caracteres`),
      sanombre: Yup.string().max(10, `Maximo 10 caracteres`),
      documento: Yup.string()
        .required("el N° documento es obligatorio")
        .max(10, `Maximo 10 caracteres`),

      fechae: Yup.date().default(function () {
        return new Date();
      }),
      nacimiento: Yup.date().default(function () {
        return new Date();
      }),
      ciudad: Yup.string()
        .required("Este campo es obligatorio")
        .max(10, `Maximo 10 caracteres`),
      lugare: Yup.string()
        .required("Este campo es obligatorio")
        .max(10, `Maximo 10 caracteres`),
      Tdocumento: Yup.string().required("Este campo es requerido"),
      Nacionalidad: Yup.string().required("Este campo es requerido"),
      cajon: Yup.string(),
      Dir: Yup.string()
        .required("Este campo es obligatorio")
        .max(20, `Maximo 20 caracteres`),
      bloq: Yup.string(),
      apca: Yup.string(),
      Barrio: Yup.string()
        .required("Este campo es obligatorio")
        .max(10, `Maximo 10 caracteres`),
      CiuMun: Yup.string()
        .required("Este campo es obligatorio")
        .max(15, `Maximo 15 caracteres`),
      depa: Yup.string()
        .required("Este campo es obligatorio")
        .max(15, `Maximo 15 caracteres`),
      Pais: Yup.string()
        .required("Este campo es obligatorio")
        .max(10, `Maximo 10 caracteres`),
      Tel: Yup.string()
        .required("Este campo es obligatorio")
        .max(11, `Maximo 11 caracteres`),
      Cel: Yup.string()
        .required("Este campo es obligatorio")
        .max(12, `Maximo 12 caracteres`),
      Email: Yup.string()
        .required("Este campo es obligatorio")
        .max(25, `Maximo 25 caracteres`),
      Profesion: Yup.string().required("Este campo es obligatorio"),
      Sprofesion: Yup.string().required("Este campo es obligatorio"),
      Dactieco: Yup.string().required("Este campo es obligatorio"),
      Cciiu: Yup.string()
        .required("Este campo es obligatorio")
        .max(4, `Maximo 4 caracteres`),
      Nempleado: Yup.string().required("Este campo es obligatorio"),
      nombreem: Yup.string().required("Este campo es obligatorio"),
      Direccion: Yup.string().required("Este campo es obligatorio"),
      Bar: Yup.string().required("Este campo es obligatorio"),
      CiMu: Yup.string().required("Este campo es obligatorio"),
      Depa: Yup.string().required("Este campo es obligatorio"),
      Pa: Yup.string().required("Este campo es obligatorio"),
      Phone: Yup.string()
        .required("Este campo es obligatorio")
        .max(11, `Maximo 11 caracteres`),
      Ex: Yup.string()
        .required("Este campo es obligatorio")
        .max(5, `Maximo 5 caracteres`),
      Cell: Yup.string()
        .required("Este campo es obligatorio")
        .max(12, `Maximo 12 caracteres`),
      CorreL: Yup.string().required("Este campo es obligatorio"),
      IngreMensu: Yup.string().required("Este campo es obligatorio"),
      Totalact: Yup.string().required("Este campo es obligatorio"),
      OtrosIngreMensu: Yup.string().required("Este campo es obligatorio"),
      Totalpas: Yup.string().required("Este campo es obligatorio"),
      Detalle: Yup.string().required("Este campo es obligatorio"),
      Totalegre: Yup.string().required("Este campo es obligatorio"),
      VentasA: Yup.string(),
      FechaCierre: Yup.date().default(function () {
        return new Date();
      }),
      respuestaA: Yup.string(),
      uno: Yup.string(),
      unouno: Yup.string(),
      dos: Yup.string(),
      dosdos: Yup.string(),
      declaracion: Yup.string().required("Este campo es obligatorio"),
      paisOrigen: Yup.string().required("Este campo es obligatorio"),
      Ciudadorigen: Yup.string().required("Este campo es obligatorio"),
      Operation: Yup.string().required("Este campo es obligatorio"),
      nombreentidad: Yup.string().required("Este campo es obligatorio"),
      Input: Yup.string(),
      noProduct: Yup.string().required("Este campo es obligatorio"),
      Montmensu: Yup.string().required("Este campo es obligatorio"),
      MoneDa: Yup.string().required("Este campo es obligatorio"),
      CiudAd: Yup.string().required("Este campo es obligatorio"),
      PAIIS: Yup.string().required("Este campo es obligatorio"),
    }),

    onSubmit: (formData) => {
      console.log(formData);
    },
  });
  
  const [documento, setdocumento] = useState("");
  const [telefono, settelefono] = useState("");
  const [celular, setcelular] = useState("");
  const [ciu, setciu] = useState("");
  const [telefono2, settelefono2] = useState("");
  const [celular2, setcelular2] = useState("");



  return (
    <div className="padre">
      <div>
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir2"
          onClick={() => History.goBack()}
        ></i>
      </div>
      <h1 className="titulo">PERSONA NATURAL</h1>

      <div className="hijo">
        <form className="Form" onSubmit={formik.handleSubmit}>
          <div className="row red-red">
            <div className="col-md-4">
              <Col className="">
                <h5 className="titulitos">Tipo de solicitud</h5>
                <label className="labelu">
                  <input
                    type="radio"
                    name="tiposolicitud"
                    id="r1"
                    value="vinculación"
                    className=""
                    required
                    onChange={formik.handleChange}
                  />
                  <label for="r1">Vinculación</label>
                </label>

                <label className="labelu">
                  <input
                    type="radio"
                    name="tiposolicitud"
                    className=""
                    id="r2"
                    value="actualización"
                    required
                    onChange={formik.handleChange}
                  />
                  <label for="r2">Actualización</label>
                </label>
              </Col>
            </div>

            <div className="col-md-4">
              <Col className="">
                <h5 className="titulitos">Tipo de solicitante</h5>
                <label className="labelu">
                  <input type="radio" name="nombre" className="" required />
                  Beneficiario/Ordenante de giros
                </label>
              </Col>
            </div>

            <div className="col-md-4">
              <Col className="">
                <h5 className="titulitos">Fecha de diligenciamiento</h5>
                <label className="labelu">
                  <input
                    type="date"
                    name="fecha"
                    className="select"
                    required
                    onChange={formik.handleChange}
                  />
                </label>
              </Col>
            </div>
          </div>

          <div className="contenedor4">
            <h5 className="titulitos">Información personal</h5>
            <label className="labelo">
              Primer Nombre
              <input
                type="text"
                name="pnombre"
                className="input"
                required
                onChange={formik.handleChange}
              />
            </label>

            <label className="labelo">
              Segundo Nombre
              <input
                type="text"
                name="snombre"
                className="input"
                onChange={formik.handleChange}
              />
            </label>

            <label className="labelo">
              Primer Apellido
              <input
                type="text"
                name="panombre"
                className="input"
                required
                onChange={formik.handleChange}
              />
            </label>

            <label className="labelo">
              Segundo Apellido
              <input
                type="text"
                name="sanombre"
                className="input"
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="select">
            <h5 className="h5">Tipo de documento</h5>
            <select
              className="selec"
              onChange={formik.handleChange}
              name="Tdocumento"
              required
            >
              <option value="">
                Seleccione su tipo de documento de identidad
              </option>
              <option value="C.C">Cédula de Ciudadania</option>
              <option value="T.I">Tarjeta de identidad</option>
              <option value="R.C">Registro Civil</option>
              <option value="C.E">Cédula extranjería</option>
              <option value="P">Pasaporte</option>
              <option value="C.D">Carné diplomático</option>
            </select>
          </div>

          <div className="bordes">
            <label className="labelo">
              Nº documento
              <input
                type="number"
                name="documento"
                className="input"
                required
                /*onChange={formik.handleChange}*/
                value={documento}
                onChange={(event) => {

                  if(event.target.value.length==11) return false;
                  setdocumento(event?.target.value);
                  
                }} 
              />
            </label>

            <label className="labelo">
              Fecha de expedición
              <input
                type="date"
                name="fechae"
                className="input"
                required
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="bordes">
            <label className="labelo">
              Lugar de expedición
              <input
                type="text"
                name="lugare"
                className="input"
                required
                onChange={formik.handleChange}
              />
            </label>

            <label className="labelo">
              Fecha de nacimiento
              <input
                type="date"
                name="nacimiento"
                className="input"
                required
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="todo">
            <div className="bordes">
              <label className="labelo">
                Ciudad de nacimiento
                <input
                  type="text"
                  name="ciudad"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>

              <div className="conte">
                <div className="col">
                  <div className="coso">
                    <Col className="">
                      <h5 className="letras">Género</h5>
                      <label className="labelo">
                        <input
                          type="radio"
                          name="genero"
                          id="r3"
                          value="Femenino"
                          className=""
                          required
                          onChange={formik.handleChange}
                        />
                        F
                      </label>
                      <label className="labelo">
                        <input
                          type="radio"
                          name="genero"
                          id="r4"
                          value="Masculino"
                          className=""
                          required
                          onChange={formik.handleChange}
                        />
                        M
                      </label>
                    </Col>
                  </div>
                </div>

                <div className="cosito">
                  <div className="col">
                    <div className="">
                      <div className="">
                        <div className="">
                          <Col className="">
                            <h5 className="letras">Estado civil</h5>
                            <label className="civil">
                              <input
                                type="radio"
                                name="EstadoCivil"
                                className=""
                                id="r5"
                                value="soltero"
                                required
                                onChange={formik.handleChange}
                              />
                              <label for="r5">Soltero</label>
                            </label>
                            <label className="civil">
                              <input
                                type="radio"
                                name="EstadoCivil"
                                className="check1"
                                id="r6"
                                value="unión libre"
                                required
                                onChange={formik.handleChange}
                              />
                              <label for="r6">Unión Libre</label>
                            </label>
                            <label className="civil">
                              <input
                                type="radio"
                                name="EstadoCivil"
                                className=""
                                id="r7"
                                value="casado"
                                required
                                onChange={formik.handleChange}
                              />
                              <label for="r7">Casado</label>
                            </label>
                          </Col>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="select">
            <h5 className="h5">Nacionalidad</h5>
            <select
              className="seleccion"
              name="Nacionalidad"
              onChange={formik.handleChange}
              required
            >
              <option  value="">
                Seleccione la nacionalidad
              </option>
              <option value="C">Colombiano</option>
              <option value="E.U">Estadounidense</option>
            </select>
            <label className="labelo">
              <input 
              type="radio" 
              name="otro" 
              className="" />
              Otro, cuál?
              <input 
              type="text" 
              name="cajon" 
              className="inpuut" />
            </label>

            <div className="contenedor4">
              <h5 className="titulitos">Información de contacto personal</h5>
              <label className="labelo">
                Dirección residencia
                <input
                  type="text"
                  name="Dir"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
              <label className="cajon">
                Bloque/Torre
                <input 
                type="number" 
                name="bloq" 
                className="input" />
              </label>
              <label className="cajon">
                Apto/Casa
                <input 
                type="number" 
                name="apca" 
                className="input" />
              </label>
            </div>

            <div className="contenedor4">
              <label className="labelo">
                Barrio
                <input
                  type="text"
                  name="Barrio"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
              <label className="cajon">
                Ciudad/Municipio
                <input
                  type="text"
                  name="CiuMun"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
              <label className="cajon">
                Departamento
                <input
                  type="text"
                  name="depa"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
            </div>

            <div className="contenedor4">
              <label className="labelo">
                País
                <input
                  type="text"
                  name="Pais"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
              <label className="cajon">
                Teléfono
                <input
                  type="number"
                  name="Tel"
                  className="input"
                  required              
                  /*onChange={formik.handleChange}*/
                  value={telefono}
                  onChange={(event) => {
  
                    if(event.target.value.length==8) return false;
                    settelefono(event?.target.value);
                  }} 
                />
              </label>
              <label className="cajon">
                Celular
                <input
                  type="number"
                  name="Cel"
                  className="input"
                  required
                  /*onChange={formik.handleChange}*/
                  value={celular}
                  onChange={(event) => {

                  if(event.target.value.length==11) return false;
                  setcelular(event?.target.value);
                }}
                
                />
              </label>
            </div>

            <div className="contenedor4">
              <label className="largos">
                Correo electrónico
                <input
                  type="email"
                  name="Email"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
            </div>

            <div className="contenedor4">
              <h5 className="titulitos">Actividad económica</h5>
              <label className="largos">
                Profesión
                <input
                  type="text"
                  name="Profesion"
                  className="input"
                  required
                  onChange={formik.handleChange}
                />
              </label>
              <h5 className="tituloos">Ocupación/Oficio</h5>

              <select
                className="selec"
                name="Sprofesion"
                onChange={formik.handleChange}
                required
              >
                <option  value="">
                  Seleccione su profesión
                </option>

                <option value="Empleado">Empleado</option>
                <option value="Pensionado">Pensionado</option>
                <option value="Ama casa">Ama de casa</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Ganadero">Ganadero</option>
                <option value="Comerciante">Comerciante</option>
                <option value="Agricultor">Agricultor</option>
                <option value="Rentista capital">Rentista de capital</option>
                <option value="Independiente">Independiente</option>
                <option value="Desempleado sin Ingresos">
                  Desemppleado sin ingresos
                </option>
                <option value="Desempleado con Ingresos">
                  Desempleado con ingresos
                </option>
                <option value="Profesional Independiente">
                  Profesional independiente
                </option>
                <option value="Socio">Socio o Empleado-socio</option>
              </select>
              <p className="texto">
                Si su ocupación es independiente, profesional independiente,
                comerciante, ganadero, agricultor o rentista de capital, por
                favor diligencie esta información.
              </p>
              <label className="lalbelo">
                Detalle de la actividad económica principal
                <input
                  type="text"
                  name="Dactieco"
                  className="input"
                  onChange={formik.handleChange}
                />
              </label>
              <label className="cajoncitos">
                Código CIIU
                <input
                  type="number"
                  name="Cciiu"
                  className="input"
                  /*onChange={formik.handleChange}*/
                  value={ciu}       
                 onChange={(event) => {

                  if(event.target.value.length==5) return false;
                  setciu(event?.target.value);
                }} 
                />
              </label>
              <label className="cajoncitos">
                Nº. Empleados
                <input
                  type="number"
                  name="Nempleado"
                  className="input"
                  onChange={formik.handleChange}
                />
              </label>

              <div className="contenedor4">
                <h5 className="titulitos">
                  Información laboral(Para Empleados e Independientes)
                </h5>
                <label className="largos">
                  Nombre de la empresa
                  <input
                    type="text"
                    name="nombreem"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="largos">
                  Dirección de la empresa o lugar donde desarrolla su actividad
                  <input
                    type="text"
                    name="Direccion"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Barrio
                  <input
                    type="text"
                    name="Bar"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="cajon">
                  Ciudad/Municipio
                  <input
                    type="text"
                    name="CiMu"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="cajon">
                  Departamento
                  <input
                    type="text"
                    name="Depa"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  País
                  <input
                    type="text"
                    name="Pa"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="jumm">
                  Teléfono
                  <input
                    type="number"
                    name="Phone"
                    className="input"
                    /*onChange={formik.handleChange}*/
                    value={telefono2}
                  onChange={(event) => {
  
                    if(event.target.value.length==8) return false;
                    settelefono2(event?.target.value);
                  }} 
                    required
                  />
                </label>
                <label className="jumm">
                  Ext
                  <input
                    type="number"
                    name="Ex"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="cajon">
                  Celular
                  <input
                    type="number"
                    name="Cell"
                    className="input"                
                   /* onChange={formik.handleChange}*/
                    value={celular2}
                    onChange={(event)  => {
                    if(event.target.value.length==11) return false;
                    setcelular2(event?.target.value);
                  }} 
                    required
                  />
                </label>
                <label className="largos">
                  Correo electrónico laboral
                  <input
                    type="email"
                    name="CorreL"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contenedor4">
                <h5 className="titulitos">Detalle información financiera</h5>
                <label className="labelo">
                  Ingresos mensuales $
                  <input
                    type="number"
                    name="IngreMensu"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="labelo">
                  Total activos $
                  <input
                    type="number"
                    name="Totalact"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="labelo">
                  Otros ingresos mensuales $
                  <input
                    type="number"
                    name="OtrosIngreMensu"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="labelo">
                  Total pasivos $
                  <input
                    type="number"
                    name="Totalpas"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="labelo">
                  Detalle otros ingresos mensuales (diferentes a su actividad
                  económica principal)
                  <input
                    type="text"
                    name="Detalle"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="labelo">
                  Total egresos mensuales $
                  <input
                    type="number"
                    name="Totalegre"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Si su ocupación es agricultor, comerciante, independiente o
                  ganadero, por favor diligencie la siguiente información.
                </label>
                <label className="cajon">
                  Ventas anuales $
                  <input
                    type="number"
                    name="VentasA"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <label className="cajon">
                  Fecha de cierre de ventas
                  <input
                    type="date"
                    name="FechaCierre"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contenedor4">
                <h5 className="titulitos">Información tributaria</h5>
                <label className="cajons">
                  ¿Es declarante de renta?
                  <input
                    type="radio"
                    name="Declarnatere"
                    value="Si"
                    id="r8"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  Si
                  <input
                    type="radio"
                    name="Declarnatere"
                    value="No"
                    id="r9"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  No
                </label>
                <label className="cajons">
                  Agente retenedor
                  <input
                    type="radio"
                    name="Agentere"
                    id="r10"
                    value="Si"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  Si
                  <input
                    type="radio"
                    name="Agentere"
                    id="r11"
                    Value="No"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  No
                </label>
                <label className="cajonl">
                  Régimen de IVA
                  <input
                    type="radio"
                    name="RegimenIva"
                    className="civilo"
                    Value="Común"
                    id="r12"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  <label for="r12">Común</label>
                  <input
                    type="radio"
                    name="RegimenIva"
                    className="civilo"
                    value="Simplificado"
                    id="r13"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  <label for="r13">Simplificado</label>
                  <input
                    type="radio"
                    name="RegimenIva"
                    className="civilo"
                    value="Ninguno"
                    id="r14"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  <label for="r14">Ninguno</label>
                </label>
              </div>

              <div className="contenedor4">
                <label className="lalbelo">
                  Obligado a tributar en Estados Unidos
                  <input
                    type="radio"
                    name="TributarEU"
                    id="r15"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  Si
                  <input
                    type="radio"
                    name="TributarEU"
                    id="r16"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  No
                </label>
                <label className="otro">
                  *Si su respuesta es afirmativa indique el número de ID
                  tributario (TIN)
                </label>
                <input
                  type="number"
                  name="respuestaA"
                  className="inpuut"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Si está obligado a tributar en otro país diferente a Colombia,
                  indique cuál (es):
                </label>
                <label className="labelo">N°.Id.tributario</label>
                <label className="labelo">
                  1.
                  <input
                    type="text"
                    name="uno"
                    className="input"
                    onChange={formik.handleChange}
                  />
                </label>

                <label className="labelo">
                  1.
                  <input
                    type="number"
                    name="unouno"
                    className="input"
                    onChange={formik.handleChange}
                  />
                </label>

                <label className="labelo">
                  2.
                  <input
                    type="text"
                    name="dos"
                    className="input"
                    onChange={formik.handleChange}
                  />
                </label>

                <label className="labelo">
                  2.
                  <input
                    type="number"
                    name="dosdos"
                    className="input"
                    onChange={formik.handleChange}
                  />
                </label>
              </div>

              <div className="contenedor4">
                <h5 className="titulitos">
                  Declaración de origen de bienes y/o fondos
                </h5>
                <label className="otro">
                  Declaro que: i) El origen de mis bienes y/o fondos provienen
                  de:
                </label>
                <input
                  type="text"
                  name="declaracion"
                  className="inpuut"
                  required
                  onChange={formik.handleChange}
                />
                <label className="titulazo">
                  El país origen de bienes y/o fondos
                </label>
                <label className="titulazo">
                  La ciudad origen de bienes y/o fondos
                </label>
                <input
                  type="text"
                  name="paisOrigen"
                  className="inpuut"
                  required
                  onChange={formik.handleChange}
                />
                 <input
                  type="text"
                  name="Ciudadorigen"
                  className="inpuut"
                  required
                  onChange={formik.handleChange}
                />
                <label className="texto">
                  ii) Los bienes y recursos entregados y a manejar en las
                  cuentas, o aquel producto de giro internacional provienen de
                  actividad ilicita (salarios, pagos laborales, honorarios,
                  comisiones, ventas netas, intereses y rendimientos
                  financieros, dividendos y participaciones, entre otros); iii)
                  No permitiré el depósito de recursos a mis cuentas o a las
                  cuentas de mi representada, por parte de terceros producto de
                  actividades ilícitas; iv) No realizaré transferencias de
                  recursos a cuentas de personas relacionadas con actividades
                  ilícitas; v) En la constitución de Negocios Fiduciarios
                  declaro que los bienes entregados se detallaran en el contrato
                  o documentos de apertura del producto. Todo lo anterior de
                  acuerdo con el marco legal aplicable nacional e internacional.
                </label>
              </div>

              <div className="contenedor4">
                <h5 className="titulitos">
                  Información demoperaciones internacionales
                </h5>
                <label className="lalbelo">
                  ¿Realiza operaciones en moneda extranjera?
                  <input
                    type="radio"
                    name="monedaE"
                    id="r17"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  Si
                  <input
                    type="radio"
                    name="monedaE"
                    id="r18"
                    className="civi"
                    required
                    onChange={formik.handleChange}
                  />{" "}
                  No
                </label>
              </div>

              <div className="contenedor4">
                <label className="lalbelo">
                  ¿Cuál(es) de las siguientes operaciones en moneda extranjera?
                </label>
                <select
                  className="seleccion"
                  name="Operation"
                  onChange={formik.handleChange}
                  required
                >
                  <option  value="">
                    Seleccione la operación
                  </option>
                  <option value="E.X">Exportador e importador</option>
                  <option value="E.U">Pago de servicios</option>
                  <option value="PRE">Préstamos</option>
                  <option value="E">Exportador</option>
                  <option value="I">Inversiones</option>
                  <option value="IM">Importador</option>
                  <option value="EN">Envío/Recepción de giros y remesas</option>
                </select>

                <label className="labelo">
                  <input type="radio" name="otroOp" className="" />
                  Otro, cuál?
                  <input type="text" name="Cual" className="inpuut" />
                </label>
              </div>

              <div className="contenedor4">
                <label className="largos">
                  Nombre de la entidad
                  <input
                    type="text"
                    name="nombreentidad"
                    className="input"
                    onChange={formik.handleChange}
                    required
                  />
                </label>

                <label className="largos">
                  Tipo de producto
                  <input
                    type="radio"
                    name="tipodeproducto"
                    id="r19"
                    className="civilo"
                    onChange={formik.handleChange}
                    required
                  />
                  Cuenta de ahorro
                  <input
                    type="radio"
                    name="tipodeproducto"
                    id="r20"
                    className="civilo"
                    onChange={formik.handleChange}
                    required
                  />
                  Cuenta corriente
                  <input
                    type="radio"
                    name="tipodeproducto"
                    id="r21"
                    className="civilo"
                    onChange={formik.handleChange}
                    required
                  />
                  Otro, cuál?
                  <input type="text" name="Input" className="inpuut" />
                </label>

                <label className="cajoneto">
                  N° de producto
                  <input
                    type="number"
                    name="noProduct"
                    className="input"
                    required
                    onChange={formik.handleChange}
                  />
                </label>

                <label className="cajoneto">
                  Monto mensual promedio
                  <input
                    type="number"
                    name="Montmensu"
                    className="input"
                    required
                    onChange={formik.handleChange}
                  />
                </label>
                <label className="cajoneto">
                  Moneda
                  <input
                    type="text"
                    name="MoneDa"
                    className="input"
                    required
                    onChange={formik.handleChange}
                  />
                </label>

                <label className="labelo">
                  Ciudad
                  <input
                    type="text"
                    name="CiudAd"
                    className="input"
                    required
                    onChange={formik.handleChange}
                  />
                </label>

                <label className="labelo">
                  País
                  <input
                    type="text"
                    name="PAIIS"
                    className="input"
                    required
                    onChange={formik.handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="contenedor4">
            <h5 className="titulitos">Autorizaciones y declaraciones</h5>
            <p className= "texto">
                * LAS ENTIDADES: entiéndase como BANCOLOMBIA S.A. y cada una de
                las entidades que pertenezcan o llegaren a pertenecer a su Grupo
                Empresarial, a sus filiales y/o subsidiarias en virtud de la
                presente Solicitud Única de Grupo; y a las entidades en las
                cuales éstas, directa o indirectamente tengan participación
                accionaria o sean asociados, domiciliadas en Colombia y/o en el
                exterior.
              </p>
            </div>
            <div className="contenedor4">
            <h5 className="titulitos">Tratamiento de datos personales</h5>
            <p className="texto">
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
                <p className="letris">
                  I. Autorizaciones necesarias para el desarrollo de la
                  actividad de LAS ENTIDADES. LAS ENTIDADES están autorizadas
                  para que:{" "}
                </p>{" "}
                <label className="letris">(i)</label> soliciten, almacenen,
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
                ENTIDADES. <label className="letris">(ii)</label> accedan,
                recolecten, procesen, actualicen, conserven, compartan y
                destruyan mi información y documentación o la de la persona que
                represento, incluso cuando no se haya perfeccionado una relación
                contractual o después de finalizada la misma.{" "}
                <label className="letris">(iii)</label> suministren, consulten,
                verifiquen y compartan la información financiera, comercial,
                crediticia mía o de mi representada y/o mis datos biométricos o
                de mi representada, con contratistas o cualquier otra entidad
                nacional o extranjera que preste servicios de verificación o
                análisis de administración de riesgo; y actualicen mi
                información o la de mi representada, de acuerdo con el análisis
                realizado. <label className="letris">(iv)</label> compilen y
                remitan a las autoridades competentes, incluyendo las fiscales y
                los reguladores financieros, nacionales o extranjeros, la
                información relacionada con la titularidad de los productos y
                servicios contratados o que llegare a contratar yo y/o mi
                representada; datos de contacto, movimientos, saldos, y toda
                aquella información mía y/o de mi representada que reposare en
                la entidad que sea solicitada por las normas nacionales o
                extranjeras. <label className="letris">(v)</label> consulten
                multas y sanciones a mi cargo o a cargo de mi representada ante
                las diferentes autoridades administrativas y judiciales.{" "}
                <label className="letris">(vi)</label> consulten, soliciten o
                verifiquen la información sobre mis activos, bienes o derechos
                míos o de mi representada en entidades públicas o privadas, o
                que conozcan personas naturales o jurídicas, o que se encuentren
                en buscadores públicos, redes sociales o publicaciones físicas o
                electrónicas, bien fuere en Colombia o en el exterior.{" "}
                <label className="letris">(vii)</label> Compartan, transmitan,
                transfieran y divulguen información y documentación mía o de mi
                representada aquí suministrada y cualquier información necesaria
                y relacionada con el presente trámite de financiación con las
                siguientes personas: la constructora del inmueble a financiar,
                la inmobiliaria, la fiduciaria que actúe como vocera y
                administradora del Fideicomiso enajenante del inmueble, los
                abogados externos a cargo del estudio de títulos del inmueble y
                la entidad titularizadora en caso de titularización de mi
                crédito o el de mi representada;{" "}
                <label className="letris">(viii)</label> Consulten, soliciten o
                verifiquen mi información de ubicación o contacto o de mi
                representada en entidades públicas o privadas.
                <p className="letris">
                  II. Autorizaciones por la naturaleza del producto y/o
                  servicio. LAS ENTIDADES están autorizadas para que:{" "}
                </p>{" "}
                a nivel nacional e internacional compartan, transmitan,
                transfieran y divulguen mi información y documentación y/o la de
                mi representada, siempre que por la naturaleza del producto o
                servicio adquirido se requiera este tratamiento, con las
                siguientes personas: <label className="letris">(a)</label>{" "}
                quienes ofrezcan, presten o suministren bienes y servicios a LAS
                ENTIDADES para la adecuada prestación de sus productos o
                servicios; o a quienes en alianza ofrezcan productos o servicios
                que conllevan beneficios para mí y/o para mi representada en
                virtud de productos que tengo con LAS ENTIDADES; o a las
                remesadoras con las cuales LAS ENTIDADES han celebrado convenios
                para la gestión y entrega de recursos enviados del exterior;{" "}
                <label className="letris">(b)</label> entidades con las cuales
                tengan celebrados o celebren a futuro contratos de uso de red;{" "}
                <label className="letris">(c)</label> la(s) aseguradora(s) con
                la(s) cual(es) LAS ENTIDADES tengan contratadas pólizas o con
                las cuales yo y/o mi representada haya decidido contratarlas,
                los intermediarios de seguros o reaseguros;{" "}
                <label className="letris">(d)</label> el comercializador o
                proveedor de los bienes o servicios financiados por LAS
                ENTIDADES; <label className="letris">(e)</label> los terceros
                contratados por LAS ENTIDADES para la cobranza y/o que realizan
                investigación de bienes y derechos tanto míos como de mi
                representada; <label className="letris">(f)</label> las entidades
                que realizan pagos de subsidios o beneficios a mi favor y/o de
                mi representada; <label className="letris">(g)</label> los
                terceros contratados por LAS ENTIDADES o personas que en virtud
                de cualquier relación contractual con dichos terceros, llevan a
                cabo avalúos; <label className="letris">(h)</label> las entidades
                operadoras de sistemas de pago de alto y bajo valor y demás
                entidades nacionales o internacionales que participan en dichos
                sistemas; <label className="letris">(i)</label> las entidades de
                corresponsalía en el exterior y/o bancos corresponsales en
                virtud de las operaciones realizadas a través de, o con estas
                entidades; <label className="letris">(j)</label> las personas que
                estén interesadas en la adquisición de cartera de LAS ENTIDADES
                o que la adquieran a cualquier título;{" "}
                <label className="letris">(k)</label> las bolsas de valores,
                administradores de sistemas de negociación y registro, a los
                proveedores de precios, a los organismos de autorregulación, los
                depósitos de valores, entidades que custodian valores y demás
                proveedores de infraestructura del mercado de valores, para que
                recopilen, administren, intercambien información entre ellos y
                la pongan en circulación en el mercado de valores;{" "}
                <label className="letris">(l)</label> las entidades de
                redescuento en virtud de las operaciones realizadas con las
                mismas; <label className="letris">(m)</label> a quienes son
                contratados para la realización de actividades de educación
                financiera; <label className="letris">(n)</label> la entidad
                administradora del programa de lealtad de LAS ENTIDADES, para
                que me contacten o contacten a mi representada para ofrecer,
                vincular, promocionar, gestionar dicho programa, y los puntos y
                beneficios asociados a éste.{" "}
                <p className="letris">
                  III. Autorizaciones para fines comerciales, el ofrecimiento y
                  administración de productos y/o servicios. LAS ENTIDADES están
                  autorizadas para que:{" "}
                </p>{" "}
                <label className="letris"> i) </label> Me contacten a mí o a mi
                representada vía telefónica, mensajería instantánea directamente
                o a través de sus proveedores, me envíen mensajes por cualquier
                medio, así como correos electrónicos y redes sociales;{" "}
                <label className="letris"> ii) </label> Compartan mi información
                o la de mi representada con proveedores o aliados;{" "}
                <label className="letris"> iii) </label> Consulten, soliciten o
                verifiquen mi información de ubicación o contacto o la de mi
                representada en entidades públicas o privadas, en Colombia o en
                el exterior. Los anteriores tratamientos, además de considerar
                las finalidades antes señaladas, también consideran las
                siguientes: para que LAS ENTIDADES:{" "}
                <label className="letris">(a)</label> Conozcan mi comportamiento
                financiero, comercial y crediticio, y todo lo relacionado con la
                liquidación o pago de aportes al sistema de seguridad social y
                parafiscales, y el cumplimiento de mis obligaciones legales o de
                mi representada; <label className="letris">(b) </label> Realicen
                todas las gestiones necesarias tendientes a confirmar y
                actualizar la información mía o de mi representada;{" "}
                <label className="letris">(c) </label> Validen y verifiquen mi
                identidad o la de mi representada para el ofrecimiento y
                administración de productos y servicios, así mismo para que se
                compartan la información; <label className="letris"> (d) </label>{" "}
                Establezcan, mantengan, terminen una relación contractual y
                actualicen mi información o la de mi representada;{" "}
                <label className="letris"> (e) </label> Ofrezcan y presten sus
                productos o servicios a través de cualquier medio o canal para
                mi beneficio y el de mi representada y de acuerdo con el perfil
                de cada uno; <label className="letris">(f)</label> Realicen una
                adecuada prestación y administración de los servicios
                financieros, incluyendo la gestión de cobranza;{" "}
                <label className="letris">(g)</label> Suministren información
                comercial, legal, de productos, de seguridad, de servicio o de
                cualquier otra índole; <label className="letris">(h)</label>{" "}
                Conozcan mi ubicación y datos de contacto o los de mi
                representada para efectos de notificaciones con fines de
                seguridad y ofrecimiento de beneficios y ofertas comerciales;{" "}
                <label className="letris">(i)</label> Efectúen análisis e
                investigaciones comerciales, estadísticas, de riesgos, de
                mercado, interbancaria y financiera incluyendo contactarme o
                contactar a mi representada para estos fines. <br />
                <label className="letris"> Revocatorias. </label> Sin perjuicio
                de las autorizaciones que he otorgado a LAS ENTIDADES para el
                tratamiento de datos personales, declaro que conozco el derecho
                que me asiste para revocar en los términos que prevé la ley,
                cualquiera de las siguientes autorizaciones:{" "}
                <label className="letris">(i)</label> envío de mensajes de texto
                para ofertas comerciales; <label className="letris">(ii)</label>{" "}
                envío de correos electrónicos para ofertas comerciales;{" "}
                <label className="letris">(iii)</label> oferta comercial por
                televentas de productos que no poseo en LAS ENTIDADES; y{" "}
                <label className="letris">(iv)</label> compartir información con
                terceros aliados para que estos ofrezcan sus productos, a través
                de los canales de LAS ENTIDADES.
              </p>
            </div>
          
            <div className="contenedor4">
            <p className="texto">
                <label className="letris"> Antilavado y anticorrupción. </label>{" "}
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
                <label className="letris"> i) </label> condenado(s) por parte de
                las autoridades competentes por el delito de lavado de activos,
                los delitos fuente de éste, incluidos los delitos contra la
                administración pública o el delito de financiación del
                terrorismo o administración de recursos relacionados con
                actividades terroristas; <label className="letris">ii) </label>{" "}
                sancionado(s) administrativamente por violaciones a cualquier
                norma anticorrupción; <label className="letris"> iii) </label>{" "}
                incluido(s) en listas administradas por cualquier autoridad
                nacional o extranjera para el control de lavado de activos y/o
                financiación del terrorismo y/o corrupción en cualquiera de sus
                modalidades; <label className="letris">iv) </label> vinculado(s)
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
                <label className="letris">Información. </label> Declaramos que:{" "}
                <label className="letris">i) </label> esta información es cierta,
                puede ser utilizada para el proceso de actualización y es
                verificable en cualquier momento y nos comprometemos a
                actualizarla o confirmarla al menos una vez al año o cada vez
                que un producto o servicio lo amerite. Igualmente nos obligamos
                a informarles cualquier cambio relacionado con los datos de
                contacto, residencia fiscal, domicilio y actividad comercial,
                dentro de los 20 días siguientes a la fecha en que se produjo el
                cambio. <label className="letris"> ii) </label> para la
                actualización solo diligenciamos la información que ha cambiado
                en el último año, en consecuencia la información no diligenciada
                permanece vigente; <label className="letris"> iii) </label>{" "}
                Conocemos que la presentación de esta solicitud no implica
                compromiso de LAS ENTIDADES para autorizar la vinculación y/
                actualización. <label className="letris"> iv) </label> Aceptamos
                que cualquier inexactitud detectada, cancelará el proceso de
                vinculación y/o actualización solicitado;{" "}
                <label className="letris"> v) </label> Autorizamos a LAS
                ENTIDADES la destrucción de este formulario, de los documentos
                soportes de la solicitud en el evento de que el proceso
                vinculación y/o actualización haya sido desfavorable. <br />
                <label className="letris">
                  Producto, costos y tarifas.{" "}
                </label>{" "}
                Declaro que he conocido las características y condiciones de los
                productos o servicios para los cuales estoy solicitando la
                vinculación y/o actualización, las cuales podré consultar en las
                oficinas y en la página web de LAS ENTIDADES. <br />
                <label className="letris"> Fogafin. </label> Declaro que me ha
                sido suministrada la información concerniente al seguro de
                depósitos del Fondo de Garantías de Instituciones Financieras
                FOGAFIN, y que la misma está a mi disposición en la página web
                de LAS ENTIDADES. <br />
                <label className="letris">Débito automático. </label> Autorizo a
                LAS ENTIDADES o a quien represente sus derechos u ostente en el
                futuro la calidad de acreedor hasta la cancelación total de la
                obligación, para debitar de la cuenta designada y de cualquier
                depósito a mi nombre o de mi representada en LAS ENTIDADES, el
                valor total de las cuotas de amortización, cánones, seguros,
                comisiones y demás valores a mi cargo, de conformidad con las
                condiciones previamente acordadas.
                <br />
                <label className="letris">Compensación. </label> Autorizo a LAS
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
                <label className="letris">
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
                <label className="letris">Correspondencia.</label> Autorizo que
                la correspondencia en general y los extractos me sean enviados a
                través de los medios virtuales, previamente habilitados e
                informados por LAS ENTIDADES. Declaramos conocer y aceptar que
                si deseamos recibirlos por otro medio, podemos solicitarlo a
                través de la sucursal virtual/actualización de datos, o a través
                de la sucursal telefónica.
                <br /> El Reporte Anual de Costos Totales lo deseo recibir
                <label className="final">
                  Virtual{" "}
                  <input
                    type="radio"
                    value="Virtual"
                    name="ReporteAnualCostosTotales"
                    className="cursor-pointer"
                    onChange={formik.handleChange}
                    required
                  />{" "}
                  Fisico{" "}
                  <input
                    type="radio"
                    value="Fisico"
                    name="ReporteAnualCostosTotales"
                    className="cursor-pointer"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <br />
                <label className="letris"> Firma y huella. </label> Autorizo a
                LAS ENTIDADES a que la firma y huella, impuesta en este formato
                puedan ser utilizadas para verificaciones internas y
                cumplimiento a los trámites que por Ley se requiera.
              </p>
            </div>
          
            <div className="contenedor4">
            <p className="texto">
            Declaro que: <label className="letris"> i) </label> fui informado
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
                <label className="letris">ii)</label> conozco y comprendo que
                estas medidas y recomendaciones no son las únicas existentes y
                por ello entiendo que puedo consultarlas y estudiarlas
                periódicamente y que las mismas están a mi disposición, entre
                otras, en la página web de LAS ENTIDADES, con el fin de estar
                siempre informado sobre las mismas y prevenir situaciones que
                puedan vulnerar la seguridad de las transacciones y afectarme a
                mí o a mi representada.
            </p>
            </div>
          
            <div className="col-md-12 mb-2" id="contain-1">
            <p className="texto">
              Se firma en señal de conformidad, entendimiento y aceptación de la
              información aquí consagrada, entre las que se encuentran, las
              Autorizaciones y Declaraciones, en especial la Autorización para
              el Tratamiento de Datos Personales y el derecho a la Revocatoria
              que me asiste en los términos de ley.
            </p>

            <div id="contenedor4">
              <label className="labeli">
                <input className="firmita" type="text"></input>
                <p>Firma del Solicitante</p>
              </label>
            </div>

            <div id="container-5">
              <Col>
                <label className="labeli">
                  <canvas id="RectangulO" width="140" height="188">
                    {" "}
                  </canvas>
                </label>
              </Col>
            </div>

            <div className="col-md-8" id="container-2">
              <p className="label21">
                {" "}
                * Solo diligenciar si actúa en calidad de:{" "}
              </p>
              <label className="label22">
                <input
                  type="radio"
                  value="Representante"
                  name="ActuaEnCalidadDe"
                  className="cursor-pointer"
                  onChange={formik.handleChange}
                  required
                />{" "}
                Representante{" "}
                <input
                  type="radio"
                  value="Apoderado"
                  name="ActuaEnCalidadDe"
                  className="cursor-pointer"
                  onChange={formik.handleChange}
                  required
                />{" "}
                Apoderado
              </label>

              <div className="float-left">
                <label >
                  Nombre{" "}
                  <input
                    type="text"
                    name="Nombre"
                    className="Bordecito"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
                <div className="label19">
                  <input
                    type="text"
                    name=""
                    className="Bordecito"
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <label className="label20">
                  No. Identificación{" "}
                  <input
                    type="text"
                    name="N_Identificacion"
                    className="Bordecito"
                    onChange={formik.handleChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-12" >
            <h5 className="titulitos">
              Para uso exclusivo de las Entidades del Grupo Empresarial
            </h5>
          </div>
          
          <div className="col-md-4" id="Container-7">
            <label className="textico">
              Código vendedor
              <input
                type="text"
                name="CodigoVendedor"
                className="Bordecito"
                onChange={formik.handleChange}
                required
              />
            </label>
          </div>
          <div className="col-md-4" id="Container-7">
            <label className="textico">
              Nombre
              <input
                type="text"
                name="Nombre2"
                className="Bordecito"
                onChange={formik.handleChange}
                required
              />
            </label>
          </div>
          <div className="col-md-4" id="Container-7">
            <label className="textico">
              Oficina
              <input
                type="text"
                name="Oficina"
                className="Bordecito"
                onChange={formik.handleChange}
                required
              />
            </label>
          </div>

          <div className="col-md-9" id="contain-1">
            <p className="texto">
              <label className="Subtitulito"> Concepto Comercial:</label> En
              virtud de haber participado en el proceso de conocimiento del
              cliente, reconozco que soy responsable del completo
              diligenciamiento de la información que ha sido consignada de forma
              libre en el presente formato y con la finalidad que LAS ENTIDADES
              adelanten dicho proceso.
            </p>
            <div>
              <Col>
              <label className="Observation1">
                <p> Observaciones</p>
                <input
                  className="Observations"
                  type="text"
                  name="Observaciones"
                  onChange={formik.handleChange}
                />
              </label>
              </Col>
            </div>
          </div>

          <div className="col-md-3" id="contain-1">
            <label>
             <Row>
                <input className="Row" type="text"></input>
                <p>Firma</p>
            </Row>
            </label>
          </div>

          <div className="bootoon">
            <Button type="submit" className="button" variant="primary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonaNatural;
