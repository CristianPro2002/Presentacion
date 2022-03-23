import React from 'react'
import { useHistory } from "react-router-dom";
import './CajeroP.css'
import img111 from './imgs/pngwing.com.webp'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const CajeroP = () => {


    let History = useHistory();
  return (
    <div className='pantallaP'>
      <div className="pantallaP2">
        <div className="io">
      <i
              class="bi bi-arrow-left-circle-fill"
              id="cir"
              onClick={() => History.push("/Roles")}
            ></i>
            </div>
        <div className="titulocajerop">
        <h1 className='cajp'>Cajero Principal</h1>
        </div>
        <div className="containerPri">
          <div className="row" id="row">
          <div className="container111" id='contre'>
            <h2>Cajero #1</h2>
            <img src={img111} alt="" className="Imagenes111"/>
            <h1>Saldo Actual</h1>
              <p className="letricas">500,000</p>
              <div className="cadministrar">
            <button className="administrar5" id='administrar'>Administrar</button>
            </div>
          </div>
          <div className="container222" id='contre'>
          <h2>Cajero #2</h2>
          <img src={img111} alt="" className="Imagenes111" />
            <h1>Saldo Actual</h1>
            <p className="letricas">500,000</p>
            <div className="cadministrar">
            <button className="administrar5" id='administrar'>Administrar</button>
            </div>
          </div>
          <div className="container333" id='contre'>
          <h2>Cajero #3</h2>
          <img src={img111} alt="" className="Imagenes111" />
            <h1>Saldo Actual</h1>
            <p className="letricas">500,000</p>
            <div className="cadministrar">
            <button className="administrar5" id='administrar'>Administrar</button>
            </div>
          </div>
          <div className="container444" id='contre'>
          <h2>Cajero #4</h2>
          <img src={img111} alt="" className="Imagenes111" />
            <h1>Saldo Actual</h1>
            <p className="letricas">500,000</p>
            <div className="cadministrar">
            <button className="administrar5" id='administrar'>Administrar</button>
            </div>
          </div>
          <div className="container555" id='contre'>
          <h2>Cajero #5</h2>
          <img src={img111} alt="" className="Imagenes111" />
            <h1>Saldo Actual</h1>
            <p className="letricas">500,000</p>
            <div className="cadministrar">
            <button className="administrar5" id='administrar'>Administrar</button>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default CajeroP