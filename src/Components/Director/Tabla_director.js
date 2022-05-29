import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEye, faEyeSlash,faPen,faTrash,faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalEliminar from "../Modal/Meliminar";
import ModalEditar from "../Modal/Meditar";
import ModalInsertar from "../Modal/Minsertar";
import ModalSolicitud from "../Modal/Msolicitud";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const columns = [
    {
      title: "Usuario",
      field: "Usuario",
      filterPlaceholder: "filter",
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    { title: "Contraseña", field: "Contra", filterPlaceholder: "filter" },
    { title: "Rol", field: "Nom_rol", filterPlaceholder: "filter" },
  ];
  useEffect(() => {
    peticionGet();
  }, []);
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
        />
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

      <MaterialTable
        columns={columns}
        data={data2}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          },
        ]}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "Usuarios",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: true,
          showTextRowsSelected: true,
          grouping: false,
          columnsButton: true,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
        title="Registro de Usuarios"
        icons={{ Add: () => <AddIcon /> }}
        style={{zIndex:"1"}}
      />

      <div className="conttable">
        <Table striped bordered hover responsive="sm">
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
