-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2022 a las 04:52:53
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arreglo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actcli_clico`
--

CREATE TABLE `actcli_clico` (
  `Idact_cli` int(11) NOT NULL COMMENT 'Identificacion de actividad de cliente',
  `No_ide` double NOT NULL COMMENT 'Nunero de identificacion del cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Intermedia entre actividad del cliente comun y cliente comun';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `act_cli`
--

CREATE TABLE `act_cli` (
  `Idact_cli` int(11) NOT NULL COMMENT 'Identificacion de actividad de cliente',
  `Fe_act` date NOT NULL COMMENT 'Fecha de actividad',
  `Idti_pro` int(11) NOT NULL COMMENT 'Identificacion de tipo de producto',
  `Valor` double NOT NULL COMMENT 'Valor de actividad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Actividad de cliente';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cla_contr`
--

CREATE TABLE `cla_contr` (
  `Idcla_contr` int(11) NOT NULL COMMENT 'Identificacion de clase de contribuyente',
  `Nom_cla` varchar(60) NOT NULL COMMENT 'Nombre de clase de contribuyente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Clase de contribuyente';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `client_co`
--

CREATE TABLE `client_co` (
  `No_ide` double NOT NULL COMMENT 'Nunero de identificacion del cliente',
  `Idti_solicit` int(11) NOT NULL COMMENT 'Identificacion de Tipo de solicitante',
  `Fec_dil` date NOT NULL COMMENT 'Fecha de diligenciamiento',
  `Pri_nom` varchar(30) NOT NULL COMMENT 'Primer nombre del cliente',
  `Seg_nom` varchar(30) NOT NULL COMMENT 'Segundo nombre del cliente',
  `Pri_ape` varchar(30) NOT NULL COMMENT 'Primer apellido del cliente',
  `Seg_ape` varchar(30) NOT NULL COMMENT 'Segundo apellido del cliente',
  `Idti_doc` int(11) NOT NULL COMMENT 'Identificacion de tipo de documento',
  `Lug_exp` varchar(40) NOT NULL COMMENT 'Lugar de expedicion de documento',
  `Fec_exp` date NOT NULL COMMENT 'Fecha de expedicion de documento',
  `Fec_nac` date NOT NULL COMMENT 'Fecha de nacimiento del cliente',
  `Ciu_nac` varchar(40) NOT NULL COMMENT 'Ciudad de nacimiento del cliente',
  `Id_gen` int(11) NOT NULL COMMENT 'Identificacion de genero',
  `Idest_ci` int(11) NOT NULL COMMENT 'Identificacion de estado civil',
  `Id_nac` int(11) NOT NULL COMMENT 'Identificacion de nacionalidad',
  `Otr_nac` varchar(100) NOT NULL COMMENT 'Otra nacionalidad',
  `Dir_re` varchar(60) NOT NULL COMMENT 'Direccion de residencia del cliente',
  `Blo_to` int(11) NOT NULL COMMENT 'Bloque o torre del cliente',
  `Ap_ca` int(11) NOT NULL COMMENT 'Apartamento o casa del cliente',
  `Barrio` varchar(40) NOT NULL COMMENT 'Barrio donde vive el cliente',
  `Ciu_mu` varchar(40) NOT NULL COMMENT 'Ciudad o municipio donde vive el cliente',
  `Depart` varchar(40) NOT NULL COMMENT 'Departamento donde vive el cliente',
  `Pais` varchar(40) NOT NULL COMMENT 'Pais donde vive el cliente',
  `Telef` double NOT NULL COMMENT 'Telefono del cliente',
  `Celular` double NOT NULL COMMENT 'Numero de celular del cliente',
  `Corr_ele` varchar(60) NOT NULL COMMENT 'Correo electronico del cliente',
  `Profe` varchar(300) NOT NULL COMMENT 'Profesion que ejerce el cliente',
  `Idocu_ofii` int(11) NOT NULL COMMENT 'Identificacion de ocupacion o oficio del cliente',
  `Det_act` varchar(300) NOT NULL COMMENT 'Detalle de actividad economica del cliente',
  `Cod_ciuu` int(11) NOT NULL COMMENT 'Codigo CIUU',
  `No_emp` int(11) NOT NULL COMMENT 'Numero de empleados',
  `Nom_emp` varchar(60) NOT NULL COMMENT 'Nombre de la empresa',
  `Dir_emp` varchar(60) NOT NULL COMMENT 'Dirección de la empresa o lugar donde desarrolla su actividad	',
  `Barr_lab` varchar(30) NOT NULL COMMENT 'Barrio donde labora',
  `Ciu_lab` varchar(30) NOT NULL COMMENT 'Ciudad o municipio donde labora',
  `Dep_lab` varchar(30) NOT NULL COMMENT 'Departamento donde labora	',
  `Pais_lab` varchar(30) NOT NULL COMMENT 'Pais donde labora	',
  `Tel_lab` double NOT NULL COMMENT 'Telefono laboral	',
  `Ext` int(11) NOT NULL COMMENT 'Extension de telefono	',
  `Cel_lab` double NOT NULL COMMENT 'Celular laboral	',
  `Corr_lab` varchar(60) NOT NULL COMMENT 'Correo laboral	',
  `Ing_men` double NOT NULL COMMENT 'Ingresos mensuales del cliente	',
  `Otr_ing` double NOT NULL COMMENT 'Otros ingresos mensuales del cliente	',
  `Det_otr` varchar(300) NOT NULL COMMENT 'Detalle otros ingresos mensuales	',
  `To_act` double NOT NULL COMMENT 'Total activos del cliente	',
  `To_pa` double NOT NULL COMMENT 'Total pasivos del cliente	',
  `To_egr` double NOT NULL COMMENT 'Total egresos mensuales del cliente	',
  `Vent_a` double NOT NULL COMMENT 'Ventas anuales del cliente	',
  `Fe_ci` date NOT NULL COMMENT 'Fecha de cierre de ventas del cliente	',
  `Dec_rent` tinyint(1) NOT NULL COMMENT '¿Es declarante de renta?	',
  `Age_ret` tinyint(1) NOT NULL COMMENT 'Agente retenedor	',
  `Idtireg_iva` int(11) NOT NULL COMMENT 'Identificacion de tipos de regimen de iva	',
  `Ob_tri` tinyint(1) NOT NULL COMMENT 'Obligado a tributar en Estados Unidos	',
  `Notri_est` double NOT NULL COMMENT 'número de ID tributario (TIN) de estados unidos	',
  `Pais_1` varchar(60) NOT NULL COMMENT 'Otro pais diferente a colombia por el cual tributa numero 1	',
  `Pais_2` varchar(60) NOT NULL COMMENT 'Otro pais diferente a colombia por el cual tributa numero 2	',
  `No_tri1` double NOT NULL COMMENT 'Numero de id tributario del pais seleccionado numero 1	',
  `No_tri2` double NOT NULL COMMENT 'Numero de id tributario del pais seleccionado numero 2	',
  `Prov_bie` varchar(300) NOT NULL COMMENT 'Proveniencia de los bienes	',
  `Pais_bi` varchar(40) NOT NULL COMMENT 'país origen de bienes y/o fondos	',
  `Ciu_bie` varchar(40) NOT NULL COMMENT 'ciudad origen de bienes y/o fondos	',
  `Op_ext` tinyint(1) NOT NULL COMMENT 'operaciones en moneda extranjera?	',
  `Idtiop_m` int(11) NOT NULL COMMENT 'Identificacion de Tipos de operaciones en moneda extranjera	',
  `Otro_mo` varchar(300) NOT NULL COMMENT 'Otro Tipo de operaciones en moneda extranjera	',
  `Nom_ent` varchar(60) NOT NULL COMMENT 'Nombre de la entidad	',
  `Idtipro_m` int(11) NOT NULL COMMENT 'Identificacion de Tipo de producto en moneda extranjera	',
  `Otro_mo2` varchar(300) NOT NULL COMMENT 'Otro Tipo de producto en moneda extranjera	',
  `No_pro` double NOT NULL COMMENT 'Numero de producto	',
  `Mo_pro` double NOT NULL COMMENT 'Monto mensual promedio	',
  `Moneda` varchar(60) NOT NULL COMMENT 'Moneda utilizada	',
  `Ciu_ent` varchar(30) NOT NULL COMMENT 'Ciudad de la entidad	',
  `Pa_ent` varchar(30) NOT NULL COMMENT 'Pais de la entidad	',
  `Idtien_re` int(11) NOT NULL COMMENT 'Identificacion de Tipo de entrega de Reporte Anual de Costos Totales',
  `No_solicit` double NOT NULL COMMENT 'Numero de identificacion del solicitante',
  `Cod_vend` int(11) NOT NULL COMMENT 'Código vendedor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Cliente comun';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clien_tip`
--

CREATE TABLE `clien_tip` (
  `Idti_sol` int(11) NOT NULL COMMENT 'Identificacion de tipo de solicitud	',
  `No_ide` double NOT NULL COMMENT 'Nunero de identificacion del cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Intermedia entre cliente comun y tipo de solicitud';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cont_ent`
--

CREATE TABLE `cont_ent` (
  `No_docu` double NOT NULL COMMENT 'Nunero de documento del contacto de la entidad',
  `Idti_doc` int(11) NOT NULL COMMENT 'Identificacion del tipo de documento',
  `Pri_nom` varchar(30) NOT NULL COMMENT 'Primer nombre del contacto de la entidad',
  `Seg_nom` varchar(30) NOT NULL COMMENT 'Segundo nombre del contacto de la entidad',
  `Pri_ape` varchar(30) NOT NULL COMMENT 'Primer apellido del contacto de la entidad',
  `Seg_ape` varchar(30) NOT NULL COMMENT 'Segundo apellido del contacto de la entidad',
  `Cargo` varchar(30) NOT NULL COMMENT 'Cargo del contacto de la entidad',
  `Dir_lab` varchar(40) NOT NULL COMMENT 'Direccion laboral del contacto de la entidad',
  `Barrio` varchar(30) NOT NULL COMMENT 'Barrio del contacto de la entidad',
  `Ciu_mu` varchar(30) NOT NULL COMMENT 'Ciudad o municipio del contacto de la entidad',
  `Depart` varchar(30) NOT NULL COMMENT 'Departamento del contacto de la entidad',
  `Pais` varchar(30) NOT NULL COMMENT 'Pais del contacto de la entidad',
  `Tel_lab` double NOT NULL COMMENT 'Telefono laboral del contacto de la entidad',
  `Ext` int(11) NOT NULL COMMENT 'Extension de numero',
  `Celular` double NOT NULL COMMENT 'Celular del contacto de la entidad',
  `Corr_lab` varchar(40) NOT NULL COMMENT 'Correo laboral del contacto de la entidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Informacion de un contacto de la entidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entidad`
--

CREATE TABLE `entidad` (
  `Fe_dil` date NOT NULL COMMENT 'Fecha de diligenciamiento',
  `Nit` double NOT NULL COMMENT 'Nit de la entidad',
  `Idti_doc` int(11) NOT NULL COMMENT 'Identificacion de tipo de documento',
  `Fidei` varchar(15) NOT NULL COMMENT 'fideicomiso',
  `No_fide` double NOT NULL COMMENT 'Numero de fideicomiso',
  `Nom_ra` varchar(45) NOT NULL COMMENT 'Nombre o razon social de la entidad',
  `Nom_cor` varchar(45) NOT NULL COMMENT 'Nombre corto o sigla',
  `Fe_cons` date NOT NULL COMMENT 'Fecha de constitucion de la entidad',
  `Ciu_cons` varchar(30) NOT NULL COMMENT 'Ciudad de constitucion de la entidad',
  `Pai_cons` varchar(30) NOT NULL COMMENT 'Pais de constitucion de la entidad',
  `Dir_se` varchar(40) NOT NULL COMMENT 'Direccion de sede principal de la entidad',
  `Barrio` varchar(30) NOT NULL COMMENT 'Barrio de la entidad',
  `Ciu_mu` varchar(30) NOT NULL COMMENT 'Ciudad de la entidad',
  `Depart` varchar(30) NOT NULL COMMENT 'Departamento de la entidad',
  `Pais` varchar(30) NOT NULL COMMENT 'Pais de la entidad',
  `Telefono` double NOT NULL COMMENT 'Telefono de la entidad',
  `Ext` int(11) NOT NULL COMMENT 'Extension de numero ',
  `Corr_se` varchar(40) NOT NULL COMMENT 'Correo de la sede principal',
  `No_doc` double NOT NULL COMMENT 'Numero de documento del representante legal',
  `Pre_1` tinyint(1) NOT NULL COMMENT '¿Tiene socios o accionistas con participación directa o indirecta superior al 5%?	',
  `Pre_2` tinyint(1) NOT NULL COMMENT '¿Tiene socios o accionistas con participación directa o indirecta igual o inferior al 5% y que tengan control sobre la entidad?	',
  `No_docu` double NOT NULL COMMENT 'Nunero de documento del contacto de la entidad',
  `Idti_na` int(11) NOT NULL COMMENT 'Identificacion de tipo de naturaleza	',
  `Co_ciuu` double NOT NULL COMMENT 'Codigo CIUU	',
  `Det_act` varchar(200) NOT NULL COMMENT 'Detalle de la actividad economica principal	',
  `No_emp` int(11) NOT NULL COMMENT 'Numero de empleados	',
  `Idti_soci` int(11) NOT NULL COMMENT 'Identificacion del tipo de sociedad comercial o civil	',
  `Otro_com` varchar(300) NOT NULL COMMENT 'Otro tipo de sociedad comercial o civil	',
  `Idti_en` int(11) NOT NULL COMMENT 'Identificacion de tipo de entidad o asociacion	',
  `Otro_ent` varchar(300) NOT NULL COMMENT 'Otro tipo de entidad o asociacion	',
  `Idti_es` int(11) NOT NULL COMMENT 'Identificacion de tipos de entidades estatales	',
  `Otro_est` varchar(300) NOT NULL COMMENT 'otro tipo de entidad estatal	',
  `Idti_des` int(11) NOT NULL COMMENT 'identificacion de tipos de entidades estatales descentralizadas de orden	',
  `Ing_op` double NOT NULL COMMENT 'Ingresos operacionales mensuales	',
  `Ino_op` double NOT NULL COMMENT 'ngresos no operacionales mensuales	',
  `Detno` double NOT NULL COMMENT 'Detalle de ingresos no operacionales u originados en actividades diferentes a la principal	',
  `vent_an` double NOT NULL COMMENT 'Ventas anuales	',
  `Fe_ci` date NOT NULL COMMENT 'Fecha de cierre de ventas	',
  `Egre_me` double NOT NULL COMMENT 'Egresos mensuales	',
  `Util_ne` double NOT NULL COMMENT 'Utilidad neta	',
  `Tot_act` double NOT NULL COMMENT 'Total activos	',
  `Tot_pas` double NOT NULL COMMENT 'Total pasivos	',
  `Tot_pat` double NOT NULL COMMENT 'Total patrimonio	',
  `Idti_cont` int(11) NOT NULL COMMENT 'Identificacion de tipo de contribuyente	',
  `Idcla_cont` int(11) NOT NULL COMMENT 'Identificacion de clase de contribuyente	',
  `Res_iva` tinyint(1) NOT NULL COMMENT 'Responsable de iva	',
  `Aut_ing` tinyint(1) NOT NULL COMMENT 'Autorretenedor otros ingresos	',
  `Int_merc` tinyint(1) NOT NULL COMMENT 'Intermediario del mercado cambiario	',
  `Vig_sup` tinyint(1) NOT NULL COMMENT 'Es vigilado por la superintendencia financiera	',
  `Obli_est` tinyint(1) NOT NULL COMMENT 'Obligado a tributar en Estados Unidos	',
  `No_id_tr` double NOT NULL COMMENT 'Si su respuesta es afirmativa indique el número de ID tributario (TIN)	',
  `Patri_1` varchar(30) NOT NULL COMMENT 'Pais donde se tributa numero 1	',
  `Patri_2` varchar(30) NOT NULL COMMENT 'Pais donde se tributa numero 2	',
  `NoidTrib_1` double NOT NULL COMMENT 'Numero de identificacion tributario numero 1	',
  `NoidTrib_2` double NOT NULL COMMENT 'Numero de identificacion tributario numero 2	',
  `Idtripro_bi` int(11) NOT NULL COMMENT 'Identificacion de tipos de proveniencia de bienes	',
  `Otro_fue` varchar(300) NOT NULL COMMENT 'Otro tipo de proveniencia de bienes	',
  `Idfue_rec` int(11) NOT NULL COMMENT 'Identificacion de los Tipos de proveniencia de los recursos entregados	',
  `Otro_pro` varchar(300) NOT NULL COMMENT 'Otro Tipo de proveniencia de los recursos entregados	',
  `Pais_or` varchar(40) NOT NULL COMMENT 'El pais de origen de bienes y/o fondos	',
  `Ciu_or` varchar(40) NOT NULL COMMENT 'La ciudad de origen de bienes y/o fondos	',
  `Nat_recu` tinyint(1) NOT NULL COMMENT 'Declaración naturaleza de los recursos	',
  `Op_ext` tinyint(1) NOT NULL COMMENT 'operaciones en moneda extranjera?	',
  `Idtiop_m` int(11) NOT NULL COMMENT 'Identificacion de Tipos de operaciones en moneda extranjera	',
  `Otro_mo` varchar(300) NOT NULL COMMENT 'Otro Tipo de operaciones en moneda extranjera	',
  `Nom_ent` varchar(60) NOT NULL COMMENT 'Nombre de la entidad	',
  `Idtipro_m` int(11) NOT NULL COMMENT 'Identificacion de Tipo de producto en moneda extranjera	',
  `Otro_mo2` varchar(300) NOT NULL COMMENT 'Otro Tipo de producto en moneda extranjera	',
  `No_pro` double NOT NULL COMMENT 'Numero de producto	',
  `Mo_pro` double NOT NULL COMMENT 'Monto mensual promedio	',
  `Moneda` varchar(60) NOT NULL COMMENT 'Moneda utilizada	',
  `Ciu_ent` varchar(30) NOT NULL COMMENT 'Ciudad de la entidad	',
  `Pa_ent` varchar(30) NOT NULL COMMENT 'Pais de la entidad	',
  `Idtien_re` int(11) NOT NULL COMMENT 'Identificacion de Tipo de entrega de Reporte Anual de Costos Totales',
  `No_solicit` double NOT NULL COMMENT 'Numero de identificacion del solicitante',
  `Cod_vend` int(11) NOT NULL COMMENT 'Código vendedor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Informacion de la entidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ent_actcli`
--

CREATE TABLE `ent_actcli` (
  `Nit` double NOT NULL COMMENT 'Nit de la entidad',
  `Idact_cli` int(11) NOT NULL COMMENT 'Identificacion de actividad de cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Intermedia entre entidad (pj) y la actividad de la entidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ent_ti`
--

CREATE TABLE `ent_ti` (
  `Nit` double NOT NULL COMMENT 'Nit de la entidad',
  `Idti_sol` int(11) NOT NULL COMMENT 'Identificacion de tipo de solicitud'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Intermedia entre entidad y tipo de solicitud';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fue_recu`
--

CREATE TABLE `fue_recu` (
  `Idfue_recu` int(11) NOT NULL COMMENT 'Identificacion de los Tipos de proveniencia de los recursos entregados ',
  `Nom_rec` varchar(100) NOT NULL COMMENT 'Nombre de los tipos de proveniencia de los recursos entregados'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipos de proveniencia de los recursos entregados';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `Id_gen` int(11) NOT NULL COMMENT 'Identificacion de genero',
  `Nom_gen` varchar(30) NOT NULL COMMENT 'Nombre de genero'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Genero';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `Id_act` int(11) NOT NULL,
  `Fecha_act` datetime NOT NULL,
  `Tip_pro` varchar(300) NOT NULL,
  `Valor_act` decimal(10,0) NOT NULL,
  `Cajero` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`Id_act`, `Fecha_act`, `Tip_pro`, `Valor_act`, `Cajero`) VALUES
(324324, '2022-05-18 00:27:00', 'Apertura de Cuenta', '20000', 'Cajero1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg_usu`
--

CREATE TABLE `reg_usu` (
  `Id_usu` int(11) NOT NULL COMMENT 'Identificacion de usuario',
  `Usuario` varchar(30) NOT NULL COMMENT 'Usuario',
  `Contra` varchar(30) NOT NULL COMMENT 'Contraseña',
  `Idti_rol` int(11) DEFAULT NULL COMMENT 'Identificacion de tipo de rol'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reg_usu`
--

INSERT INTO `reg_usu` (`Id_usu`, `Usuario`, `Contra`, `Idti_rol`) VALUES
(6, 'cristian31', 'cristian', 2),
(12, 'sfd', 'fsdfs', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repr_le`
--

CREATE TABLE `repr_le` (
  `No_doc` double NOT NULL COMMENT 'Numero de documento del representante legal',
  `Idti_doc` int(11) NOT NULL COMMENT 'Identificacion de tipo de documento',
  `Pri_no` varchar(30) NOT NULL COMMENT 'Primer nombre del representante legal',
  `Seg_no` varchar(30) NOT NULL COMMENT 'Segundo nombre del representante legal',
  `Pri_ape` varchar(30) NOT NULL COMMENT 'Primer apellido del representante legal',
  `Seg_ape` varchar(30) NOT NULL COMMENT 'SEgundo apellido del representante legal',
  `Cargo` varchar(30) NOT NULL COMMENT 'Cargo del representante legal',
  `Dir_lab` varchar(40) NOT NULL COMMENT 'Direccion laboral del representante legal',
  `Barrio` varchar(30) NOT NULL COMMENT 'Barrio del representante legal',
  `Ciu_mu` varchar(30) NOT NULL COMMENT 'Ciudad o municipio del representante legal',
  `Depart` varchar(30) NOT NULL COMMENT 'Departamento del representante legal',
  `Pais` varchar(30) NOT NULL COMMENT 'Pais del representante legal',
  `Tel_lab` double NOT NULL COMMENT 'Telefono laboral del representante legal',
  `Ext` int(11) NOT NULL COMMENT 'Extension de telefono',
  `Celular` double NOT NULL COMMENT 'Celular del representante legal',
  `Corr_lab` varchar(40) NOT NULL COMMENT 'Correo laboral del representante legal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Informacion de representante legal';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitante`
--

CREATE TABLE `solicitante` (
  `Idti_soli` int(11) NOT NULL COMMENT 'Identificacion de Tipo de solicitante parte inferior',
  `No_solicit` double NOT NULL COMMENT 'Numero de identificacion del solicitante',
  `Nom_solicit` varchar(100) NOT NULL COMMENT 'Nombre completo del solicitante',
  `Firma` varchar(40) NOT NULL COMMENT 'Firma del solicitante'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Medida de seguridad que contiene informacion del solicitante';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tien_re`
--

CREATE TABLE `tien_re` (
  `Idtien_re` int(11) NOT NULL COMMENT 'Identificacion de Tipo de entrega de Reporte Anual de Costos Totales',
  `Nom_tien` varchar(40) NOT NULL COMMENT 'Nombre de Tipo de entrega de Reporte Anual de Costos Totales'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de entrega de Reporte Anual de Costos Totales';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiest_civ`
--

CREATE TABLE `tiest_civ` (
  `Idest_ci` int(11) NOT NULL COMMENT 'Identificacion de estado civil',
  `Nom_civ` varchar(40) NOT NULL COMMENT 'Nombre del tipo de estado civil'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de estado civil';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiocu_ofi`
--

CREATE TABLE `tiocu_ofi` (
  `Idocu_ofi` int(11) NOT NULL COMMENT 'Identificacion de ocupacion o oficio',
  `Nom_ocu` varchar(40) NOT NULL COMMENT 'Nombre de tipo de ocupacion o oficio'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de ocupacion o oficio';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiop_mo`
--

CREATE TABLE `tiop_mo` (
  `Idtiop_mo` int(11) NOT NULL COMMENT 'Identificacio de Tipos de operaciones en moneda extranjera',
  `Nom_opm` varchar(100) NOT NULL COMMENT 'Nombre de Tipos de operaciones en moneda extranjera'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipos de operaciones en moneda extranjera';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipro_bie`
--

CREATE TABLE `tipro_bie` (
  `Idtripro_bie` int(11) NOT NULL COMMENT 'Identificacion de tipos de proveniencia de bienes',
  `Nomti_bie` varchar(60) NOT NULL COMMENT 'Nombre de tipos de proveniencia de bienes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='tipos de proveniencia de bienes';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipro_mo`
--

CREATE TABLE `tipro_mo` (
  `Idtipro_mo` int(11) NOT NULL COMMENT 'Identificacion de Tipo de producto en moneda extranjera',
  `Nom_promo` varchar(40) NOT NULL COMMENT 'Nombre de Tipo de producto en moneda extranjera'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de producto en moneda extranjera';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tip_pro`
--

CREATE TABLE `tip_pro` (
  `Idti_pro` int(11) NOT NULL COMMENT 'Identificacion de tipo de producto',
  `Nom_pro` varchar(40) NOT NULL COMMENT 'Nombre del producto'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de producto';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tip_rol`
--

CREATE TABLE `tip_rol` (
  `Idti_rol` int(11) NOT NULL COMMENT 'Identificacion de tipo de rol',
  `Nom_rol` varchar(30) NOT NULL COMMENT 'Nombre de rol'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tip_rol`
--

INSERT INTO `tip_rol` (`Idti_rol`, `Nom_rol`) VALUES
(1, 'Director '),
(2, 'Asesor'),
(3, 'Gerente'),
(4, 'Cajero'),
(5, 'Cajero Principal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tireg_iv`
--

CREATE TABLE `tireg_iv` (
  `Idtireg_iv` int(11) NOT NULL COMMENT 'Identificacion de tipos de regimen de iva',
  `Nom_reg` varchar(30) NOT NULL COMMENT 'Nombre de tipos de regimen de iva'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipos de regimen de iva';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_contr`
--

CREATE TABLE `ti_contr` (
  `Idti_contr` int(11) NOT NULL COMMENT 'Identificacion de tipo de contribuyente',
  `Nom_contr` varchar(300) NOT NULL COMMENT 'Nombre de tipo de contribuyente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de contribuyente';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_desc`
--

CREATE TABLE `ti_desc` (
  `Idti_desc` int(11) NOT NULL COMMENT 'identificacion de tipos de entidades estatales descentralizadas de orden',
  `Nom_desc` int(11) NOT NULL COMMENT 'Nombre de tipos de entidades estatales descentralizadas de orden'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipos de entidades estatales descentralizadas de orden';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_doc`
--

CREATE TABLE `ti_doc` (
  `Idti_doc` int(11) NOT NULL COMMENT 'Identificacion de tipo de documento',
  `Nom_doc` varchar(30) NOT NULL COMMENT 'Nombre de documento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de documento';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_ent`
--

CREATE TABLE `ti_ent` (
  `Idti_ent` int(11) NOT NULL COMMENT 'Identificacion de tipo de entidad o asociacion',
  `Noti_ent` varchar(40) NOT NULL COMMENT 'Nombre de tipo de entidad o asociacion'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de entidad o asociacion';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_est`
--

CREATE TABLE `ti_est` (
  `Idti_est` int(11) NOT NULL COMMENT 'Identificacion de tipos de entidades estatales',
  `Nom_est` int(11) NOT NULL COMMENT 'Nombre de tipo de entidades estatales'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipos de entidades estatales';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_nac`
--

CREATE TABLE `ti_nac` (
  `Id_nac` int(11) NOT NULL COMMENT 'Identificacion de tipo de nacionalidad',
  `Nom_nac` varchar(30) NOT NULL COMMENT 'Nombre de tipo de nacionalidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de nacionalidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_nat`
--

CREATE TABLE `ti_nat` (
  `Idti_nat` int(11) NOT NULL COMMENT 'Identificacion de tipo de naturaleza ',
  `Nom_nat` varchar(30) NOT NULL COMMENT 'Nombre del tipo de naturaleza'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de naturaleza de la entidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_soc`
--

CREATE TABLE `ti_soc` (
  `Idti_soc` int(11) NOT NULL COMMENT 'Identificacion del tipo de sociedad comercial o civil',
  `nom_ti` varchar(30) NOT NULL COMMENT 'Nombre de tipo de sociedad comercial o civil'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='tipo de sociedad comercial o civil';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_sol`
--

CREATE TABLE `ti_sol` (
  `Idti_sol` int(11) NOT NULL COMMENT 'Identificacion de tipo de solicitud',
  `Nom_sol` varchar(30) NOT NULL COMMENT 'Nombre de solicitud'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Entidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_soli`
--

CREATE TABLE `ti_soli` (
  `Idti_soli` int(11) NOT NULL COMMENT 'Identificacion de Tipo de solicitante parte inferior',
  `Nom_soli` varchar(40) NOT NULL COMMENT 'Nombre de tipo de solicitante parte inferior'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='tipo de solicitante parte inferior';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_solicit`
--

CREATE TABLE `ti_solicit` (
  `Idti_solicit` int(11) NOT NULL COMMENT 'Identificacion de Tipo de solicitante ',
  `Nomti_sol` varchar(60) NOT NULL COMMENT 'Nombre de Tipo de solicitante'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tipo de solicitante';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `Cod_vend` int(11) NOT NULL COMMENT 'Código vendedor',
  `Nom_vend` varchar(100) NOT NULL COMMENT 'Nombre del vendedor',
  `Oficina` varchar(50) NOT NULL COMMENT 'Oficina del vendedor',
  `Obser` varchar(300) NOT NULL COMMENT 'Observaciones',
  `Firma_vend` varchar(40) NOT NULL COMMENT 'Firma del vendedor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Vendedor';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actcli_clico`
--
ALTER TABLE `actcli_clico`
  ADD KEY `Idact_cli` (`Idact_cli`),
  ADD KEY `No_ide` (`No_ide`);

--
-- Indices de la tabla `act_cli`
--
ALTER TABLE `act_cli`
  ADD PRIMARY KEY (`Idact_cli`),
  ADD KEY `Idti_pro` (`Idti_pro`);

--
-- Indices de la tabla `cla_contr`
--
ALTER TABLE `cla_contr`
  ADD PRIMARY KEY (`Idcla_contr`);

--
-- Indices de la tabla `client_co`
--
ALTER TABLE `client_co`
  ADD PRIMARY KEY (`No_ide`),
  ADD KEY `Idti_solicit` (`Idti_solicit`),
  ADD KEY `Idti_doc` (`Idti_doc`),
  ADD KEY `Id_gen` (`Id_gen`),
  ADD KEY `Idest_ci` (`Idest_ci`),
  ADD KEY `Id_nac` (`Id_nac`),
  ADD KEY `Idtien_re` (`Idtien_re`),
  ADD KEY `No_solicit` (`No_solicit`),
  ADD KEY `Cod_vend` (`Cod_vend`),
  ADD KEY `Idocu_ofii` (`Idocu_ofii`),
  ADD KEY `Idtireg_iva` (`Idtireg_iva`),
  ADD KEY `Idtipro_m` (`Idtipro_m`),
  ADD KEY `Idtiop_m` (`Idtiop_m`);

--
-- Indices de la tabla `clien_tip`
--
ALTER TABLE `clien_tip`
  ADD KEY `Idti_sol` (`Idti_sol`),
  ADD KEY `No_ide` (`No_ide`),
  ADD KEY `Idti_sol_2` (`Idti_sol`);

--
-- Indices de la tabla `cont_ent`
--
ALTER TABLE `cont_ent`
  ADD PRIMARY KEY (`No_docu`),
  ADD KEY `Idti_doc` (`Idti_doc`);

--
-- Indices de la tabla `entidad`
--
ALTER TABLE `entidad`
  ADD PRIMARY KEY (`Nit`),
  ADD KEY `Idti_doc` (`Idti_doc`),
  ADD KEY `No_doc` (`No_doc`),
  ADD KEY `No_docu` (`No_docu`),
  ADD KEY `Idtien_re` (`Idtien_re`),
  ADD KEY `No_solicit` (`No_solicit`),
  ADD KEY `Cod_vend` (`Cod_vend`),
  ADD KEY `Idti_na` (`Idti_na`),
  ADD KEY `Idti_soci` (`Idti_soci`),
  ADD KEY `Idti_en` (`Idti_en`),
  ADD KEY `Idti_es` (`Idti_es`),
  ADD KEY `Idti_des` (`Idti_des`),
  ADD KEY `Idti_cont` (`Idti_cont`),
  ADD KEY `Idcla_cont` (`Idcla_cont`),
  ADD KEY `Idtripro_bi` (`Idtripro_bi`),
  ADD KEY `Idfue_rec` (`Idfue_rec`),
  ADD KEY `Idtiop_m` (`Idtiop_m`),
  ADD KEY `Idtipro_m` (`Idtipro_m`);

--
-- Indices de la tabla `ent_actcli`
--
ALTER TABLE `ent_actcli`
  ADD KEY `Nit` (`Nit`),
  ADD KEY `Idact_cli` (`Idact_cli`);

--
-- Indices de la tabla `ent_ti`
--
ALTER TABLE `ent_ti`
  ADD KEY `Nit` (`Nit`),
  ADD KEY `Idti_sol` (`Idti_sol`);

--
-- Indices de la tabla `fue_recu`
--
ALTER TABLE `fue_recu`
  ADD PRIMARY KEY (`Idfue_recu`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`Id_gen`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`Id_act`);

--
-- Indices de la tabla `reg_usu`
--
ALTER TABLE `reg_usu`
  ADD PRIMARY KEY (`Id_usu`),
  ADD KEY `Idti_rol` (`Idti_rol`);

--
-- Indices de la tabla `repr_le`
--
ALTER TABLE `repr_le`
  ADD PRIMARY KEY (`No_doc`),
  ADD KEY `Idti_doc` (`Idti_doc`);

--
-- Indices de la tabla `solicitante`
--
ALTER TABLE `solicitante`
  ADD PRIMARY KEY (`No_solicit`),
  ADD KEY `Idti_soli` (`Idti_soli`);

--
-- Indices de la tabla `tien_re`
--
ALTER TABLE `tien_re`
  ADD PRIMARY KEY (`Idtien_re`);

--
-- Indices de la tabla `tiest_civ`
--
ALTER TABLE `tiest_civ`
  ADD PRIMARY KEY (`Idest_ci`);

--
-- Indices de la tabla `tiocu_ofi`
--
ALTER TABLE `tiocu_ofi`
  ADD PRIMARY KEY (`Idocu_ofi`);

--
-- Indices de la tabla `tiop_mo`
--
ALTER TABLE `tiop_mo`
  ADD PRIMARY KEY (`Idtiop_mo`);

--
-- Indices de la tabla `tipro_bie`
--
ALTER TABLE `tipro_bie`
  ADD PRIMARY KEY (`Idtripro_bie`);

--
-- Indices de la tabla `tipro_mo`
--
ALTER TABLE `tipro_mo`
  ADD PRIMARY KEY (`Idtipro_mo`);

--
-- Indices de la tabla `tip_pro`
--
ALTER TABLE `tip_pro`
  ADD PRIMARY KEY (`Idti_pro`);

--
-- Indices de la tabla `tip_rol`
--
ALTER TABLE `tip_rol`
  ADD PRIMARY KEY (`Idti_rol`);

--
-- Indices de la tabla `tireg_iv`
--
ALTER TABLE `tireg_iv`
  ADD PRIMARY KEY (`Idtireg_iv`);

--
-- Indices de la tabla `ti_contr`
--
ALTER TABLE `ti_contr`
  ADD PRIMARY KEY (`Idti_contr`);

--
-- Indices de la tabla `ti_desc`
--
ALTER TABLE `ti_desc`
  ADD PRIMARY KEY (`Idti_desc`);

--
-- Indices de la tabla `ti_doc`
--
ALTER TABLE `ti_doc`
  ADD PRIMARY KEY (`Idti_doc`);

--
-- Indices de la tabla `ti_ent`
--
ALTER TABLE `ti_ent`
  ADD PRIMARY KEY (`Idti_ent`);

--
-- Indices de la tabla `ti_est`
--
ALTER TABLE `ti_est`
  ADD PRIMARY KEY (`Idti_est`);

--
-- Indices de la tabla `ti_nac`
--
ALTER TABLE `ti_nac`
  ADD PRIMARY KEY (`Id_nac`);

--
-- Indices de la tabla `ti_nat`
--
ALTER TABLE `ti_nat`
  ADD PRIMARY KEY (`Idti_nat`);

--
-- Indices de la tabla `ti_soc`
--
ALTER TABLE `ti_soc`
  ADD PRIMARY KEY (`Idti_soc`);

--
-- Indices de la tabla `ti_sol`
--
ALTER TABLE `ti_sol`
  ADD PRIMARY KEY (`Idti_sol`);

--
-- Indices de la tabla `ti_soli`
--
ALTER TABLE `ti_soli`
  ADD PRIMARY KEY (`Idti_soli`);

--
-- Indices de la tabla `ti_solicit`
--
ALTER TABLE `ti_solicit`
  ADD PRIMARY KEY (`Idti_solicit`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`Cod_vend`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `act_cli`
--
ALTER TABLE `act_cli`
  MODIFY `Idact_cli` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de actividad de cliente';

--
-- AUTO_INCREMENT de la tabla `reg_usu`
--
ALTER TABLE `reg_usu`
  MODIFY `Id_usu` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de usuario', AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actcli_clico`
--
ALTER TABLE `actcli_clico`
  ADD CONSTRAINT `actcli_clico_ibfk_1` FOREIGN KEY (`Idact_cli`) REFERENCES `act_cli` (`Idact_cli`) ON UPDATE CASCADE,
  ADD CONSTRAINT `actcli_clico_ibfk_2` FOREIGN KEY (`No_ide`) REFERENCES `client_co` (`No_ide`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `act_cli`
--
ALTER TABLE `act_cli`
  ADD CONSTRAINT `act_cli_ibfk_1` FOREIGN KEY (`Idti_pro`) REFERENCES `tip_pro` (`Idti_pro`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `client_co`
--
ALTER TABLE `client_co`
  ADD CONSTRAINT `client_co_ibfk_12` FOREIGN KEY (`Idtien_re`) REFERENCES `tien_re` (`Idtien_re`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_13` FOREIGN KEY (`No_solicit`) REFERENCES `solicitante` (`No_solicit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_14` FOREIGN KEY (`Cod_vend`) REFERENCES `vendedor` (`Cod_vend`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_15` FOREIGN KEY (`Idocu_ofii`) REFERENCES `tiocu_ofi` (`Idocu_ofi`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_16` FOREIGN KEY (`Idtireg_iva`) REFERENCES `tireg_iv` (`Idtireg_iv`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_17` FOREIGN KEY (`Idtiop_m`) REFERENCES `tiop_mo` (`Idtiop_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_18` FOREIGN KEY (`Idtipro_m`) REFERENCES `tipro_mo` (`Idtipro_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_2` FOREIGN KEY (`Idti_solicit`) REFERENCES `ti_solicit` (`Idti_solicit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_3` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_4` FOREIGN KEY (`Id_gen`) REFERENCES `genero` (`Id_gen`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_5` FOREIGN KEY (`Idest_ci`) REFERENCES `tiest_civ` (`Idest_ci`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_6` FOREIGN KEY (`Id_nac`) REFERENCES `ti_nac` (`Id_nac`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `clien_tip`
--
ALTER TABLE `clien_tip`
  ADD CONSTRAINT `clien_tip_ibfk_1` FOREIGN KEY (`Idti_sol`) REFERENCES `ti_sol` (`Idti_sol`) ON UPDATE CASCADE,
  ADD CONSTRAINT `clien_tip_ibfk_2` FOREIGN KEY (`No_ide`) REFERENCES `client_co` (`No_ide`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cont_ent`
--
ALTER TABLE `cont_ent`
  ADD CONSTRAINT `cont_ent_ibfk_1` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `entidad`
--
ALTER TABLE `entidad`
  ADD CONSTRAINT `entidad_ibfk_1` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_11` FOREIGN KEY (`Idtien_re`) REFERENCES `tien_re` (`Idtien_re`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_12` FOREIGN KEY (`No_solicit`) REFERENCES `solicitante` (`No_solicit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_13` FOREIGN KEY (`Cod_vend`) REFERENCES `vendedor` (`Cod_vend`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_14` FOREIGN KEY (`Idti_na`) REFERENCES `ti_nat` (`Idti_nat`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_15` FOREIGN KEY (`Idti_soci`) REFERENCES `ti_soc` (`Idti_soc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_16` FOREIGN KEY (`Idti_es`) REFERENCES `ti_est` (`Idti_est`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_17` FOREIGN KEY (`Idti_des`) REFERENCES `ti_desc` (`Idti_desc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_18` FOREIGN KEY (`Idti_en`) REFERENCES `ti_ent` (`Idti_ent`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_19` FOREIGN KEY (`Idti_cont`) REFERENCES `ti_contr` (`Idti_contr`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_20` FOREIGN KEY (`Idcla_cont`) REFERENCES `cla_contr` (`Idcla_contr`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_21` FOREIGN KEY (`Idfue_rec`) REFERENCES `fue_recu` (`Idfue_recu`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_22` FOREIGN KEY (`Idtripro_bi`) REFERENCES `tipro_bie` (`Idtripro_bie`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_23` FOREIGN KEY (`Idtiop_m`) REFERENCES `tiop_mo` (`Idtiop_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_24` FOREIGN KEY (`Idtipro_m`) REFERENCES `tipro_mo` (`Idtipro_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_3` FOREIGN KEY (`No_doc`) REFERENCES `repr_le` (`No_doc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_5` FOREIGN KEY (`No_docu`) REFERENCES `cont_ent` (`No_docu`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ent_actcli`
--
ALTER TABLE `ent_actcli`
  ADD CONSTRAINT `ent_actcli_ibfk_1` FOREIGN KEY (`Nit`) REFERENCES `entidad` (`Nit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ent_actcli_ibfk_2` FOREIGN KEY (`Idact_cli`) REFERENCES `act_cli` (`Idact_cli`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ent_ti`
--
ALTER TABLE `ent_ti`
  ADD CONSTRAINT `ent_ti_ibfk_1` FOREIGN KEY (`Nit`) REFERENCES `entidad` (`Nit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ent_ti_ibfk_2` FOREIGN KEY (`Idti_sol`) REFERENCES `ti_sol` (`Idti_sol`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reg_usu`
--
ALTER TABLE `reg_usu`
  ADD CONSTRAINT `reg_usu_ibfk_1` FOREIGN KEY (`Idti_rol`) REFERENCES `tip_rol` (`Idti_rol`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `repr_le`
--
ALTER TABLE `repr_le`
  ADD CONSTRAINT `repr_le_ibfk_1` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `solicitante`
--
ALTER TABLE `solicitante`
  ADD CONSTRAINT `solicitante_ibfk_1` FOREIGN KEY (`Idti_soli`) REFERENCES `ti_soli` (`Idti_soli`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
