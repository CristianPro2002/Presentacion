import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Asesor.css'
import personaj from './Imagens/personaj.png'
import personan from './Imagens/personan.jpg'

const Asesor3 = () => {

    let History = useHistory();

    return (
        <div className="principal">
            <div className="padresito">


                <div className="inicio">
                    <i class="bi bi-arrow-left-circle-fill" id="cir" onClick={() => History.push('/Roles')}></i>
                </div>

                <div className="contenedort">
                    <h1 className="titulu3">Asesor #3</h1>
                </div>


                <div className="pri">
                    <div className="concaro">


                        <div className="col">
                            <div className="contb">
                                <div className="col">

                                    <div className="titu">
                                        <h2 className="tp">Selecciona el tipo de Persona</h2>
                                    </div>

                                    <div className="row" id="con">
                                        <div className="contj">
                                            <div className="col">
                                                <img className="PJ"
                                                    alt=""
                                                    src={personaj}

                                                />
                                                <div className="bj">
                                                    <button onClick={() => History.push('/PersonaJuridica3')} className="pj">Persona Juridica</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="conn">
                                            <div className="col">
                                                <img className="PN"
                                                    alt=""
                                                    src={personan}

                                                />
                                                <div className="bn">
                                                    <button onClick={() => History.push('/PersonaNatural3')} className="pn">Persona Natural</button>
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
        </div>
    )
}

export default Asesor3
