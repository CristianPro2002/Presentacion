import React, { useState } from "react";
import "./Estilos.css";
import "react-datepicker/dist/react-datepicker.css";
import Col from "react-bootstrap/Col";
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
        .max(10, `Maximo 10 caracteres`),
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

  return (
    <div className="padre">
      <div>
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir2"
          onClick={() => History.push("/Asesor")}
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
              <option selected value="s">
                Seleccione su documento de identidad
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
                onChange={formik.handleChange}
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
              <option selected value="s">
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
                  onChange={formik.handleChange}
                />
              </label>
              <label className="cajon">
                Celular
                <input
                  type="number"
                  name="Cel"
                  className="input"
                  required
                  onChange={formik.handleChange}
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
                <option selected value="s">
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
                  onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
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
                  name="paisorigen"
                  className="inpuut"
                  required
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  name="ciudadorigen"
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
                  name="operation"
                  onChange={formik.handleChange}
                  required
                >
                  <option selected value="u">
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
                  <input type="checkbox" name="otroOp" className="" />
                  Otro, cuál?
                  <input type="text" name="Cual" className="inpuut" />
                </label>
              </div>

              <div className="contenedor4">
                <label className="largos">
                  Nombre de la entidad
                  <input
                    type="text"
                    name="nombre"
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
