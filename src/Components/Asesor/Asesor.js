import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Asesor.css";
import personaj from "./Imagens/personaj.png";
import personan from "./Imagens/personan.jpg";
import Form from "react-bootstrap/Form";

const Asesor = () => {
  let History = useHistory();

  const validar = (e) => {
    var validacion = document.getElementById('Eleccion1');
    if(validacion.value==1 || validacion.value=="")
    {
      History.push("/PersonaJuridica");
      validacion.focus();
    } else if (validacion.value==2 || validacion.value=="")
          { History.push("/PersonaJuridica");
            validacion.focus();}
           else 
           alert("Por favor seleccione una opcion"); 
           validacion.focus();
}

const validar2 = (e) => {
  var validacion = document.getElementById('Eleccion2');
  if(validacion.value==1 || validacion.value=="")
  {
    History.push("/PersonaNatural");
    validacion.focus();
  } else if (validacion.value==2 || validacion.value=="")
        { History.push("/PersonaNatural");
          validacion.focus();}
         else 
         alert("Por favor seleccione una opcion"); 
         validacion.focus();
}

  return (
    <div className="principal">
      <div className="padresito">
        <div className="inicio">
          <i
            class="bi bi-arrow-left-circle-fill"
            id="cir"
            onClick={() => History.push("/Roles")}
          ></i>
        </div>

        <div className="contenedort">
          <h1 className="titulu">Asesor #1</h1>
        </div>

        <div className="pri">
          <div className="concaro">
            <div className="col" >
              <div className="contb">
                <div className="col">
                  <div className="titu">
                    <h2 className="tp">Selecciona el tipo de Persona</h2>
                  </div>

                  <div className="row" id="con">
                    <div className="contj">
                      <div className="col" id="contenedor1">
                        <img className="PJ" alt="" src={personaj} />
                        <form>
                          <input
                            placeholder="Ingrese la cedula"
                            type="number"
                            className="campo1"
                          ></input>
                          <button className="consultar1"  onClick={() => History.push("/Consulta")}>Consultar</button>
                        </form>
                            <form>
                                <div className="cdesplegable1">
                        <Form.Select
                          aria-label="Default select example"
                          id="Eleccion1"
                          name="Eleccion1"
                          className="desplegable1"
                          
                        >
                          <option value="0" className="Lform">
                          Selecciona el proceso
                          </option>
                          <option value="1">Cuenta de ahorro</option>
                          <option value="2">Cuenta corriente</option>
                        
                        </Form.Select>
                        </div>
                        <div className="bj">
                          <button
                            onClick={validar}
                            name="validar"
                            className="pj"
                          >
                            Persona Juridica
                          </button>
                          
                        </div>
                        </form>
                      </div>
                    </div>

                    <div className="conn">
                      <div className="col" id="contenedor1">
                        <img className="PN" alt="" src={personan} />
                        <form>
                          <input
                            placeholder="Ingrese la cedula"
                            type="number"
                            className="campo2"
                          ></input>
                          <button className="consultar2"  onClick={() => History.push("/Consulta2")}>Consultar</button>
                        </form>
                        <form>
                        <div className="cdesplegable2">
                        <Form.Select
                          aria-label="Default select example"
                          id="Eleccion2"
                          name="Eleccion2"
                          className="desplegable2"
                        >
                          <option value="0" className="Lform">
                            Selecciona el proceso
                          </option>
                          <option value="1">Cuenta de ahorro</option>
                          <option value="2">Cuenta corriente</option>
                          
                        </Form.Select>
                        </div>
                        <div className="bn">
                          <button
                            onClick={validar2}
                            name="vaidar2"
                            className="pn"
                          >
                            Persona Natural
                          </button>
                        </div>
                        </form>
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
  );
};

export default Asesor;
