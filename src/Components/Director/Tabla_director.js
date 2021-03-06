import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { AiFillPrinter } from "react-icons/ai";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faEye,
  faEyeSlash,
  faPen,
  faTrash,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalEliminar from "../Modal/Meliminar";
import ModalEditar from "../Modal/Meditar";
import ModalInsertar from "../Modal/Minsertar";
import ModalSolicitud from "../Modal/Msolicitud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Tabla_director = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/index.php";

  const [data2, setData2] = useState([]);
  const [dato, setDato] = useState([]);
  const [solicitud, setSolicitud] = useState([]);
  const [solicitud2, setSolicitud2] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_usu: "",
    Usuario: "",
    Contra: "",
    Idti_rol: "",
  });

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setData2(response.data);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  
  useEffect(() => {
    var f = new FormData();
    f.append("METHOD", "ROLES");
    axios.post(baseUrl, f).then((response) => {
      setDato(response.data);
    });
  }, []);

  const peticionGet3 = async () => {
    var f = new FormData();
    f.append("METHOD", "SOLICITUD");
    await axios.post(baseUrl, f).then((response) => {
      setSolicitud(response.data);
    });
  };


  useEffect(() => {
    peticionGet3();
  }, []);

  const peticionGet4 = async () => {
    var f = new FormData();
    f.append("METHOD", "SOLICITUDPJ");
    await axios.post(baseUrl, f).then((response) => {
      setSolicitud2(response.data);
    });
  };


  useEffect(() => {
    peticionGet4();
  }, []);


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
  };
  const handleChange2 = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.Usuario.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Id_usu.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Nom_rol.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setData2(resultadosBusqueda);
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


  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  const abrirp = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
  };
  const cerrarp = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "display:none;");
  };

  const abrir = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const abrirpj = (e) => {
    document
      .getElementById("ventana_modal3")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrar = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
  };

  const cerrarpj = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal3")
      .setAttribute("style", "display:none;");
  };


  const abrir2 = (e) => {
    e.preventDefault();
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrar2 = (e) => {
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

  return (
    <div>
      <div className="contatras">
        <ModalSolicitud
          abrir={abrir}
          cerrar={cerrar}
          abrir2={abrir2}
          cerrar2={cerrar2}
          cerrarT={cerrarT}
          abrirp={abrirp}
          cerrarp={cerrarp}
          solicitud={solicitud}
          setSolicitud={setSolicitud}
          peticionGet3={peticionGet3}
          solicitud2={solicitud2}
          setSolicitud2={setSolicitud2}
          abrirpj={abrirpj}
          cerrarpj={cerrarpj}
        />
      </div>
      <h1 className="titureg">Registros de cuentas de usuario</h1>
      <div className="containerInput">
        <div className="div_report">
          <a className="report" href="http://localhost:8080/imprimir_roles">
            <AiFillPrinter />
          </a>
        </div>
        <div className="input_buscadorsito">
          <input
            id="input_buscador"
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="B??squeda por Nombre  de usuario o nombre de rol"
            onChange={handleChange2}
          />
        </div>
        <div className="boton_buscar">
          <button id="icono_buscar" className="btn btn-dark">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="d-grid gap-2">
        <button
          id="btnagre"
          className="btn btn-primary"
          onClick={() => abrirCerrarModalInsertar()}
        >
          Agregar contacto
        </button>
      </div>

      <div className="conttable">
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th className="ocultarid">Id</th>
              <th>Nombre del usuario</th>
              <th>Contrase??a </th>
              <th>Tipo de rol </th>
              <th>Funcionalidades</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((Data) => (
              <tr key={Data.Id_usu}>
                <td className="ocultarid">{Data.Id_usu}</td>
                <td>{Data.Usuario}</td>
                <td>{Data.Contra}</td>
                <td>{Data.Nom_rol}</td>
                <td>
                  <button
                    id="boton_verde_tabla"
                    className="btn btn-primary"
                    onClick={() => seleccionarUsuario(Data, "Editar")}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  &nbsp;
                  <button
                    id="boton_danger_rojo"
                    className="btn btn-danger"
                    onClick={() => seleccionarUsuario(Data, "Eliminar")}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <ModalInsertar
        handleChange={handleChange}
        handleToggle={handleToggle}
        icon={icon}
        type={type}
        dato={dato}
        peticionPost={peticionPost}
        abrirCerrarModalInsertar={abrirCerrarModalInsertar}
        modalInsertar={modalInsertar}
      />
      <ModalEditar
        dataUsuario={dataUsuario}
        handleChange={handleChange}
        modalEditar={modalEditar}
        dato={dato}
        peticionPut={peticionPut}
        abrirCerrarModalEditar={abrirCerrarModalEditar}
      />

      <ModalEliminar
        modalEliminar={modalEliminar}
        dataUsuario={dataUsuario}
        peticionDelete={peticionDelete}
        abrirCerrarModalEliminar={abrirCerrarModalEliminar}
      />
    </div>
  );
};
