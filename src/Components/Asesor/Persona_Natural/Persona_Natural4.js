import React from "react";
import "./Estilos.css";
import "react-datepicker/dist/react-datepicker.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const PersonaNatural4 = () => {
  let History = useHistory();

  return (
    <div className="padre">
      <div>
        <Button onClick={() => History.push("/Asesor4")} className="flechis">
          {" ← "}
        </Button>
      </div>
      <h1 className="titulo">PERSONA NATURAL</h1>

      <div className="hijo">
        <form className="Form">
          <div className="row red-red">
            <div className="col-md-4">
              <Col className="">
                <h5 className="titulitos">Tipo de solicitud</h5>
                <label className="labelu">
                  <input
                    type="radio"
                    name="nombre"
                    id="r1"
                    value="vin"
                    className=""
                  />
                  <label for="r1">Vinculación</label>
                </label>

                <label className="labelu">
                  <input
                    type="radio"
                    name="nombre"
                    className=""
                    id="r2"
                    value="act"
                  />
                  <label for="r2">Actualización</label>
                </label>
              </Col>
            </div>

            <div className="col-md-4">
              <Col className="">
                <h5 className="titulitos">Tipo de solicitante</h5>
                <label className="labelu">
                  <input type="checkbox" name="nombre" className="" required />
                  Beneficiario/Ordenante de giros
                </label>
              </Col>
            </div>

            <div className="col-md-4">
              <Col className="">
                <h5 className="titulitos">Fecha de diligenciamiento</h5>
                <label className="labelu">
                  <input type="date" name="fecha" className="select" />
                </label>
              </Col>
            </div>
          </div>

          <div className="contenedor4">
            <h5 className="titulitos">Información personal</h5>
            <label className="labelo">
              Primer Nombre
              <input type="text" name="nombre" className="input" />
            </label>

            <label className="labelo">
              Segundo Nombre
              <input type="text" name="nombre" className="input" />
            </label>

            <label className="labelo">
              Primer Apellido
              <input type="text" name="nombre" className="input" />
            </label>

            <label className="labelo">
              Segundo Apellido
              <input type="text" name="nombre" className="input" />
            </label>
          </div>

          <div className="select">
            <h5 className="h5">Tipo de documento</h5>
            <select className="selec">
              <option selected value="s">
                Seleccione su documento de identidad
              </option>
              <option value="C.C">Cédula de Ciudadania</option>
              <option value="T.I">Tarjeta de identidad</option>
              <option value="R.C">R.Civil</option>
              <option value="C.E">Cédula extranjería</option>
              <option value="P">Pasaporte</option>
              <option value="C.D">Carné diplomático</option>
            </select>
          </div>

          <div className="bordes">
            <label className="labelo">
              Nº documento
              <input type="text" name="nombre" className="input" />
            </label>

            <label className="labelo">
              Fecha de expedición
              <input type="date" name="nombre" className="input" />
            </label>
          </div>

          <div className="bordes">
            <label className="labelo">
              Lugar de expedición
              <input type="text" name="nombre" className="input" />
            </label>

            <label className="labelo">
              Fecha de nacimiento
              <input type="date" name="nombre" className="input" />
            </label>
          </div>

          <div className="todo">
            <div className="bordes">
              <label className="labelo">
                Ciudad de nacimiento
                <input type="text" name="nombre" className="input" />
              </label>

              <div className="conte">
                <div className="col">
                  <div className="coso">
                    <Col className="">
                      <h5 className="letras">Género</h5>
                      <label className="labelo">
                        <input type="radio" name="nombre" id="r3" value="FEM" className="" />F
                      </label>
                      <label className="labelo">
                        <input type="radio" name="nombre" id="r4" value="MAS" className="" />M
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
                                name="nombre"
                                className=""
                                id="r5" 
                                value="sol"
                              />
                            <label for="r5">Soltero</label>
                            </label>
                            <label className="civil">
                              <input
                                type="radio"
                                name="nombre"
                                className="check1"
                                id="r6" 
                                value="uni"
                              />
                            <label for="r6">Unión Libre</label>
                            </label>
                            <label className="civil">
                              <input
                                type="radio"
                                name="nombre"
                                className=""
                                id="r7" 
                                value="cas"
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
            <select className="seleccion">
              <option selected value="s">
                Seleccione la nacionalidad
              </option>
              <option value="C">Colombiano</option>
              <option value="E.U">Estadounidense</option>
            </select>
            <label className="labelo">
              <input type="checkbox" name="nombre" className="" />
              Otro, cuál?
              <input type="text" name="nombre" className="inpuut" />
            </label>

            <div className="contenedor4">
              <h5 className="titulitos">Información de contacto personal</h5>
              <label className="labelo">
                Dirección residencia
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajon">
                Bloque/Torre
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajon">
                Apto/Casa
                <input type="text" name="nombre" className="input" />
              </label>
            </div>

            <div className="contenedor4">
              <label className="labelo">
                Barrio
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajon">
                Ciudad/Municipio
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajon">
                Departamento
                <input type="text" name="nombre" className="input" />
              </label>
            </div>

            <div className="contenedor4">
              <label className="labelo">
                Pais
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajon">
                Teléfono
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajon">
                Celular
                <input type="text" name="nombre" className="input" />
              </label>
            </div>

            <div className="contenedor4">
              <label className="largos">
                Correo electrónico
                <input type="text" name="nombre" className="input" />
              </label>
            </div>

            <div className="contenedor4">
              <h5 className="titulitos">Actividad económica</h5>
              <label className="largos">
                Profesión
                <input type="text" name="nombre" className="input" />
              </label>
              <h5 className="tituloos">Ocupacion/Oficio</h5>

              <select className="selec">
                <option selected value="s">
                  Seleccione su profesión
                </option>

                <option value="C">Empleado</option>
                <option value="E.U">Pensionado</option>
                <option value="C">Ama de casa</option>
                <option value="E.U">Estudiante</option>
                <option value="C">Ganadero</option>
                <option value="E.U">Comerciante</option>
                <option value="C">Agricultor</option>
                <option value="E.U">Rentista de capital</option>
                <option value="C">Independiente</option>
                <option value="E.U">Desemppleado sin ingresos</option>
                <option value="E.U">Desempleado con ingresos</option>
                <option value="C">Profesional independiente</option>
                <option value="E.U">Socio o Empleado-socio</option>
              </select>
              <p className="texto">
                Si su ocupación es independiente, profesional independiente,
                comerciante, ganadero, agricultor o rentista de capital, por
                favor diligencie esta información.
              </p>
              <label className="lalbelo">
                Detalle de la actividad económica principal
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajoncitos">
                Código CIIU
                <input type="text" name="nombre" className="input" />
              </label>
              <label className="cajoncitos">
                Nº. Empleados
                <input type="text" name="nombre" className="input" />
              </label>

              <div className="contenedor4">
                <h5 className="titulitos">
                  Información laboral(Para Empleados e Independientes)
                </h5>
                <label className="largos">
                  Nombre de la empresa
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="largos">
                  Dirección de la empresa o lugar donde desarrolla su actividad
                  <input type="text" name="nombre" className="input" />
                </label>
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Barrio
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="cajon">
                  Ciudad/Municipio
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="cajon">
                  Departamento
                  <input type="text" name="nombre" className="input" />
                </label>
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Pais
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="jumm">
                  Teléfono
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="jumm">
                  Ext
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="cajon">
                  Celular
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="largos">
                  Correo electrónico laboral
                  <input type="text" name="nombre" className="input" />
                </label>
              </div>

              <div className="contenedor4">
                <h5 className="titulitos">Detalle información financiera</h5>
                <label className="labelo">
                  Ingresos mensuales $
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="labelo">
                  Total activos $
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="labelo">
                  Otros ingresos mensuales $
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="labelo">
                  Total pasivos $
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="labelo">
                  Detalle otros ingresos mensuales (diferentes a su actividad
                  económica principal)
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="labelo">
                  Total egresos mensuales $
                  <input type="text" name="nombre" className="input" />
                </label>
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Si su ocupación es agricultor, comerciante, independiente o
                  ganadero, por favor diligencie la siguiente información.
                </label>
                <label className="cajon">
                  Ventas anuales $
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="cajon">
                  Fecha de cierre de ventas
                  <input type="date" name="nombre" className="input" />
                </label>
              </div>

              <div className="contenedor4">
                <h5 className="titulitos">Información tributaria</h5>
                <label className="cajons">
                  ¿Es declarante de renta?
                  <input type="checkbox" name="nombre" className="civi" /> Si
                  <input type="checkbox" name="nombre" className="civi" /> No
                </label>
                <label className="cajons">
                  Agente retenedor
                  <input type="checkbox" name="nombre" className="civi" /> Si
                  <input type="checkbox" name="nombre" className="civi" /> No
                </label>
                <label className="cajonl">
                  Régimen de IVA
                  <input
                    type="checkbox"
                    name="nombre"
                    className="civilo"
                  />{" "}
                  Común
                  <input
                    type="checkbox"
                    name="nombre"
                    className="civilo"
                  />{" "}
                  Simplificado
                  <input
                    type="checkbox"
                    name="nombre"
                    className="civilo"
                  />{" "}
                  Ninguno
                </label>
              </div>

              <div className="contenedor4">
                <label className="lalbelo">
                  Obligado a tributar en Estados Unidos
                  <input type="checkbox" name="nombre" className="civi" /> Si
                  <input type="checkbox" name="nombre" className="civi" /> No
                </label>
                <label className="otro">
                  *Si su respuesta es afirmativa indique el número de ID
                  tributario (TIN)
                </label>
                <input type="text" name="nombre" className="inpuut" />
              </div>

              <div className="contenedor4">
                <label className="labelo">
                  Si está obligado a tributar en otro país diferente a Colombia,
                  indique cuál (es):
                </label>
                <label className="labelo">N°.Id.tributario</label>
                <label className="labelo">
                  1.
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="labelo">
                  1.
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="labelo">
                  2.
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="labelo">
                  2.
                  <input type="text" name="nombre" className="input" />
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
                <input type="text" name="nombre" className="inpuut" />
                <label className="titulazo">
                  El país origen de bienes y/o fondos
                </label>
                <label className="titulazo">
                  La ciudad origen de bienes y/o fondos
                </label>
                <input type="text" name="nombre" className="inpuut" />
                <input type="text" name="nombre" className="inpuut" />
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
                  <input type="checkbox" name="nombre" className="civi" /> Si
                  <input type="checkbox" name="nombre" className="civi" /> No
                </label>
              </div>

              <div className="contenedor4">
                <label className="lalbelo">
                  ¿Cuál(es) de las siguientes operaciones en moneda extranjera?
                </label>
                <select className="seleccion">
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
                  <input type="checkbox" name="nombre" className="" />
                  Otro, cuál?
                  <input type="text" name="nombre" className="inpuut" />
                </label>
              </div>

              <div className="contenedor4">
                <label className="largos">
                  Nombre de la entidad
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="largos">
                  Tipo de producto
                  <input type="checkbox" name="nombre" className="civilo" />
                  Cuenta de ahorro
                  <input type="checkbox" name="nombre" className="civilo" />
                  Cuenta corriente
                  <input type="checkbox" name="nombre" className="civilo" />
                  Otro, cuál?
                  <input type="text" name="nombre" className="inpuut" />
                </label>

                <label className="cajoneto">
                  N° de producto
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="cajoneto">
                  Monto mensual promedio
                  <input type="text" name="nombre" className="input" />
                </label>
                <label className="cajoneto">
                  Moneda
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="labelo">
                  Ciudad
                  <input type="text" name="nombre" className="input" />
                </label>

                <label className="labelo">
                  País
                  <input type="text" name="nombre" className="input" />
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

export default PersonaNatural4;
