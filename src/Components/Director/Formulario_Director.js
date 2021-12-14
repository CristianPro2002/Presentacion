import React, {useState}from  'react'
import './ESTILOS_FORMD/estile_form_d.css'
import {Button,Dropdown, } from 'react-bootstrap'
import imagen from './Imagenes/icono_este_es.png'


const Formulario_Director = (props) => {


    return (
        <div className="DIRECTOR_CONTENEDOR">
            <div className="contenedor-formulario-director">
                <form className="Formularioxd">
                    <div className="imgagen_director">
                    <img className="Imagen_bank" src={imagen} />
                    </div>

                    <div className="titulo_creacion_usuarios">
                        <h2> Creacion de usuarios</h2>
                    </div>

                    <div className="cajas_director">
                        <label id="label__1">
                            Nombre del usuario
                        <input
                            className="inputxd"
                            type="text"
                            placeholder="insert the username"
                            name="Nom_usu"
                        ></input>
                        </label>
                    </div>

                    <div className="cajas_director">
                        <label id="label__2">
                            Contraseña del usuario
                        <input
                            className="inputxd"
                            type="password"
                            placeholder="insert the password"

                            
                        ></input>
                        </label>
                    </div>

                    <div className="cajas_director">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Tipo de rol
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Asesor </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Gerente</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Cajero</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="cajas_director2">
                        <Button variant="success" type="submit">
                        {" "}
                        Enviar{" "}
                        </Button>
                    </div>

                    <div className="cajas_director2">
                        <label>
                            confirma la creacion del usuario{" "}
                        <input
                            type="checkbox"
                            name="Checkiar"
                         ></input>
                         </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Formulario_Director;