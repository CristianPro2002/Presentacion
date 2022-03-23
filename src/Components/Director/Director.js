import React from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Estilos_Navbar/estilo_nav.css'
const Director = () => {

let History  = useHistory();
        
    return (
        <div className='Contenedor_navbarsito'>
             <div className="botones ">
             <button  onClick={() => History.push("/Director")}  class="btn thirde">Home
          </button>
          <button   onClick={() => History.push("/Tabla_director")} class="btn thirde">Tabla de usuarios
          </button>
          <button  onClick={() => History.push("/Roles")} class="btn thirde">Roles
          </button>
          </div>
        </div>
    )
    
}

export default Director
