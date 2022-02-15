import React, { useState } from "react";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeError,
} from "./Elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./ComponentesInicio/Input";
import "./InicioS.css";
import logo from "../Inicio_sesion/Logo/logo.webp";
import { useHistory } from "react-router-dom";

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  let history = useHistory();

  const expresiones = {
    usuario: /^ADMIN$/, // Letras, numeros, guion y guion_bajo
    password: /^ADMIN$/, // 4 a 12 digitos.
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (usuario.valido === "true" && password.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      history.push("/Roles");
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <div className="Fondo">
      <div className="Fondo2">
        <main className="main">
          <div className="cont">
            <div className="cont3">
              <div className="contenderlogo">
                <img className="Logo" alt="" src={logo} />
              </div>
            </div>
            <br />
            <div className="">
              <Formulario action="" onSubmit={onSubmit}>
                <Input
                  estado={usuario}
                  cambiarEstado={cambiarUsuario}
                  tipo="text"
                  label="Usuario"
                  placeholder="john123"
                  name="usuario"
                  leyendaError="Usuario Incorrecto"
                  expresionRegular={expresiones.usuario}
                />

                <Input
                  estado={password}
                  cambiarEstado={cambiarPassword}
                  tipo="password"
                  label="Contraseña"
                  name="password1"
                  leyendaError="Contraseña Incorrecta"
                  expresionRegular={expresiones.password}
                />

                {formularioValido === false && (
                  <MensajeError>
                    <p>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <b>Error:</b> Por favor rellena correctamente.
                    </p>
                  </MensajeError>
                )}
                <br />
                <ContenedorBotonCentrado>
                  <Boton type="submit" className="Botonsito">
                    <span>Ingresar</span>
                  </Boton>
                </ContenedorBotonCentrado>
              </Formulario>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
