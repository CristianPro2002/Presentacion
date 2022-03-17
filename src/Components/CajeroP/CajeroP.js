import React from 'react'
import { useHistory } from "react-router-dom";
const CajeroP = () => {


    let History = useHistory();
  return (
    <div>
        <button  onClick={() => History.push('/Roles')}>devolver</button>
    </div>
  )
}

export default CajeroP