import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagen from "./Imagenes/Manager-icon.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import MUIDataTable from "mui-datatables";

export const Tabla_director = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/index.php";

  const [data2, setData2] = useState([]);
  const [dato, setDato] = useState([]);
  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_usu: "",
    Usuario: "",
    Contra: "",
    Idti_rol: "",
  });

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData2(response.data);
    });
  };




useEffect(() => {
  peticionGet2();
}, [dato]);

const peticionGet2 = async () => {
  var f = new FormData();
  f.append("METHOD", "POSTO");
  await axios.post(baseUrl, f).then((response) => {
    setDato(response.data);
  });
};

  const peticionPost = async () => {
    var f = new FormData();
    f.append("Id_usu", dataUsuario.Id_usu);
    f.append("Usuario", dataUsuario.Usuario);
    f.append("Contra", dataUsuario.Contra);
    f.append("Idti_rol", dataUsuario.Idti_rol);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f).then((response) => {
      setData2(data2.concat(response.data));
      abrirCerrarModalInsertar();
    });
  };



  const abrirCerrarModalInsertar = () => {
    setModalInsetar(!modalInsertar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(dataUsuario);
  };

  const seleccionarUsuario = (usuario, caso) => {
    setDataUsuario(usuario);

    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const peticionPut = async () => {
    var f = new FormData();
    f.append("Id_usu", dataUsuario.Id_usu);
    f.append("Usuario", dataUsuario.Usuario);
    f.append("Contra", dataUsuario.Contra);
    f.append("Idti_rol", dataUsuario.Idti_rol);
    f.append("METHOD", "PUT");
    await axios
      .post(baseUrl, f, { params: { Id_usu: dataUsuario.Id_usu } })
      .then((response) => {
        var dataNueva = data2;
        dataNueva.map((Usuario) => {
          if (Usuario.Id_usu === dataUsuario.Id_usu) {
            Usuario.Id_usu = dataUsuario.Id_usu;
            Usuario.Usuario = dataUsuario.Usuario;
            Usuario.Contra = dataUsuario.Contra;
            Usuario.Idti_rol = dataUsuario.Idti_rol;
          }
        });
        setData2(dataNueva);
        abrirCerrarModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const peticionDelete = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios
      .post(baseUrl, f, { params: { Id_usu: dataUsuario.Id_usu } })
      .then((response) => {
        setData2(
          data2.filter((Usuario) => Usuario.Id_usu !== dataUsuario.Id_usu)
        );
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, [data2]);

  const [type,setType]=useState("text");
  const [icon,setIcon]=useState(faEyeSlash);
  const handleToggle=()=>{
    if(type==='password'){
      setIcon(faEye);
      setType('text')
    }
    else{
      setIcon(faEyeSlash);
      setType('password');
    }
  }

  let History = useHistory();

  const botonV = document.querySelectorAll("listascss")[0];
  const ventana_modal = document.querySelectorAll("container__modal2")[0];

  const abrir = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrar = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
  };

  const abrir2 = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrar2 = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "display:none;");
  };

  const cerrarT = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "display:none;");
  };

  const columns = [{
    name:"Id_usu",
    label:"ID"
  },
  {
    name:"Usuario",
    label:"Usuario"
  },{
    name:"Contra",
    label:"Contraseña"
  },{
    name:"Nom_rol",
    label:"Tipo de rol"
  }]
 
  const options = {filterType: 'checkbox', actionsColumnIndex:-1}

  return (
    <div>
      <div className="contemodal">
        <input type="checkbox" id="evento-click" />
        <div className="botnomodal">
          <label
            for="evento-click"
            title="Abrir modal"
            className="btn__open-modal"
          >
            <p>Solicitudes</p>
          </label>
        </div>
        <div className="background__blur"></div>

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

        <div class="container__modal2" id="ventana_modal">
          <input type="checkbox" id="evento-click2" />
          <div class="header__modal2">
            <label for="evento-click2" onClick={cerrar}>
              X
            </label>
          </div>

          <div class="body__modal2">
            <h1 class="title__modal2">Solicitud #-Asesor#</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>

            <button onClick={cerrar} className="btn btn-success">Aceptar</button>
            <button onClick={abrir2} className="btn btn-danger">Cancelar</button>
          </div>
        </div>

        <div class="container__modal3" id="ventana_modal2">
          <input type="checkbox" id="evento-click3" />
          <div class="header__modal3">
            <label for="evento-click3" onClick={cerrar2}>
              X
            </label>
          </div>

          <div class="body__modal3">
            <h1 class="title__modal3">Solicitud #-Asesor#</h1>
            <input type="text" className="contenedortext" />
            <button onClick={cerrarT} className="btn btn-success">Aceptar</button>
            <button onClick={cerrar2} className="btn btn-danger">Cancelar</button>
          </div>
        </div>
      </div>

      <div className="contatras">
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir"
          onClick={() => History.push("/Roles")}
        ></i>
      </div>

      <h1 className="titureg">Registros de cuentas de usuario</h1>

      <div className="d-grid gap-2">
        <button
          id="btnagre"
          className="btn btn-primary"
          onClick={() => abrirCerrarModalInsertar()}
        >
          Agregar contacto
        </button>
      </div>

      <MUIDataTable
      title={"Lista de Usuarios"}
      data={data2}
      columns={columns}
      options={options}
      actions={[
        {
            icon: 'edit',
            tooltip: 'Editar usuario',
            
            onClick: data2.map((Data) => (() => seleccionarUsuario(Data, "Editar")
            ))
      },
      {
        icon: 'delete',
        tooltip: 'Eliminar Usuario',
        onClick: data2.map((Data) => (() => seleccionarUsuario(Data, "Eliminar")
        ))
  }]
        
    }
      />
      <div className="conttable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del usuario</th>
              <th>Contraseña </th>
              <th>Tipo de rol </th>
            </tr>
          </thead>
          <tbody>
            {data2.map((Data) => (
              <tr key={Data.Id_usu}>
                <td>{Data.Id_usu}</td>
                <td>{Data.Usuario}</td>
                <td>{Data.Contra}</td>
                <td>{Data.Nom_rol}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => seleccionarUsuario(Data, "Editar")}
                  >
                    Editar
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => seleccionarUsuario(Data, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal isOpen={modalInsertar}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div className="contenedor_padre_director">
            <div className="container_formulario_director">
              <form>
                <div className="titulo_creacion_usu">
                  <img className="img_usu_creacion" src={imagen}></img>
                  <h3>Creacion de Usuarios</h3>
                </div>
                <div className="Nombre_Usuario">
                  <div className="label_usu">
                    <label>Usuario:</label>
                  </div>
                  <input
                    required
                    className="input_color1"
                    placeholder="Enter the user name"
                    type="text"
                    name="Usuario"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="Contraseña_Usuario">
                  <span class="icon_eye" onClick={handleToggle}>
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <div className="Contraseña_label_usu">
                    <label>Contraseña:</label>
                  </div>
                  <input
                    required
                    className="input_color2"
                    id="input_contra_form"
                    placeholder="Enter the password"
                    type={type}
                    name="Contra"
                    onChange={handleChange}
                  ></input>
                </div>
                <div id="arreglos_desple">
                  <select
                    className="nashe"
                    required
                    name="Idti_rol"
                    id="select_sin_react"
                    onChange={handleChange}
                  >
                    {" "}
                    Tipo de rol
                    <option value="">Seleccione un rol </option>
                    {dato.map((Usuario) => (
                    <option value={Usuario.Idti_rol}>{Usuario.Nom_rol}</option>
                    ))}
                  </select>
                </div>

                <div className="center_button">
                  <button className="btn third" onClick={() => peticionPost()}>
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => abrirCerrarModalInsertar()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Contacto</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="Esconder">ID:</label>
            <input
              type="text"
              className="form-control Esconder"
              name="Id_usu"
              onChange={handleChange}
              value={dataUsuario && dataUsuario.Id_usu}
            ></input>
            <label>Usuario:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="Usuario"
              onChange={handleChange}
              value={dataUsuario && dataUsuario.Usuario}
            ></input>
            <label>Contraseña:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="Contra"
              onChange={handleChange}
              value={dataUsuario && dataUsuario.Contra}
            ></input>
            <label>Tipo de rol:</label>
            <br></br>
            <select
              class="form-select"
              aria-label="Default select example"
              name="Idti_rol"
              onChange={handleChange}
            >
              <option>
                {dataUsuario && dataUsuario.Nom_rol}
              </option>
              {dato.map((Usuario) => (
                <option value={Usuario.Idti_rol}>
                  {Usuario.Nom_rol}
                </option>
              ))}
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => peticionPut()}>
            Insertar
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => abrirCerrarModalEditar()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Estás seguro que deseas eliminar el Usuario <b>
          {dataUsuario && dataUsuario.Usuario}</b>?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => peticionDelete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => abrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
