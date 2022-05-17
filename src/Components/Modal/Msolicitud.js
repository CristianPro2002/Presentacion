import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
const Msolicitud = ({abrir}) => {
  return (
    <div>
         <div className="container__modal">
          <div className="header__modal">
            <label for="evento-click">X</label>
          </div>

          <div className="body__modal">
            <h1 className="title__modal">Solicitudes</h1>
            <ListGroup className="listassoli">
              <ListGroup.Item
                action
                onClick={abrir}
                className="listascss"
                id="botonV"
              >
                Solicitud #1-Asesor1
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={abrir}
                className="listascss"
                id="botonV"
              >
                Solicitud #3-Asesor1
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={abrir}
                className="listascss"
                id="botonV"
              >
                Solicitud #3-Asesor2
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={abrir}
                className="listascss"
                id="botonV"
              >
                Solicitud #4-Asesor4
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={abrir}
                className="listascss"
                id="botonV"
              >
                Solicitud #5-Asesor3
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
    </div>
  )
}

export default Msolicitud