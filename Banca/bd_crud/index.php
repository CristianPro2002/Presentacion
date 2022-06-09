<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

$conexion = mysqli_connect('localhost', 'root', '', 'banca4.0');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['Id_usu'])){
        $query="select * from reg_usu where Id_usu=".$_GET['Id_usu'];
        $resultado=metodoGet($query);
         echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
     }else{
         $query="select * from reg_usu, tip_rol where tip_rol.Idti_rol=reg_usu.Idti_rol";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
        
     }
    header("HTTP/1.1 200 OK");
     exit();
}

//  Desplegable de tipo de rol
if($_POST['METHOD']=='POSTO'){
    unset($_POST['METHOD']);
    $query="select * from tip_rol";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//Consulta de informacion de persona natural

if($_POST['METHOD']=='CONSULTAID'){
    unset($_POST['METHOD']);
    $query="select * from client_co where No_ide=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}



//Registro de Fomulario persona natural
if($_POST['METHOD']=='FORMN'){
    unset($_POST['METHOD']);
    $No_ide =$_POST['No_ide'];
    $Idti_sol =$_POST['Idti_sol'];
    $Idti_solicit =$_POST['Idti_solicit'];
    $Fec_dil =$_POST['Fec_dil'];
    $Pri_nom =$_POST['Pri_nom'];
    $No_cuenta =$_POST['No_cuenta'];
    $Idti_cue =$_POST['Idti_cue'];
    $Seg_nom =$_POST['Seg_nom'];
    $Pri_ape =$_POST['Pri_ape'];
    $Seg_ape =$_POST['Seg_ape'];
    $Idti_doc =$_POST['Idti_doc'];
    $Lug_exp =$_POST['Lug_exp'];
    $Fec_exp =$_POST['Fec_exp'];
    $Fec_nac =$_POST['Fec_nac'];
    $Ciu_nac =$_POST['Ciu_nac'];
    $Id_gen =$_POST['Id_gen'];
    $Idest_ci =$_POST['Idest_ci'];
    $Id_nac =$_POST['Id_nac'];
    $Otr_nac =$_POST['Otr_nac'];
    $Dir_re =$_POST['Dir_re'];
    $Blo_to =$_POST['Blo_to'];
    $Ap_ca =$_POST['Ap_ca'];
    $Barrio =$_POST['Barrio'];
    $Ciu_mu =$_POST['Ciu_mu'];
    $Depart =$_POST['Depart'];
    $Pais =$_POST['Pais'];
    $Telef =$_POST['Telef'];
    $Celular =$_POST['Celular'];
    $Corr_ele =$_POST['Corr_ele'];
    $Profe =$_POST['Profe'];
    $Idocu_ofii =$_POST['Idocu_ofii'];
    $Det_act =$_POST['Det_act'];
    $Cod_ciuu =$_POST['Cod_ciuu'];
    $No_emp =$_POST['No_emp'];
    $Nom_emp =$_POST['Nom_emp'];
    $Dir_emp =$_POST['Dir_emp'];
    $Barr_lab =$_POST['Barr_lab'];
    $Ciu_lab =$_POST['Ciu_lab'];
    $Dep_lab =$_POST['Dep_lab'];
    $Pais_lab =$_POST['Pais_lab'];
    $Tel_lab =$_POST['Tel_lab'];
    $Ext =$_POST['Ext'];
    $Cel_lab =$_POST['Cel_lab'];
    $Corr_lab =$_POST['Corr_lab'];
    $Ing_men =$_POST['Ing_men'];
    $Otr_ing =$_POST['Otr_ing'];
    $Det_otr =$_POST['Det_otr'];
    $To_act =$_POST['To_act'];
    $To_pa =$_POST['To_pa'];
    $To_egr =$_POST['To_egr'];
    $Vent_a =$_POST['Vent_a'];
    $Fe_ci =$_POST['Fe_ci'];
    $Dec_rent =$_POST['Dec_rent'];
    $Age_ret =$_POST['Age_ret'];
    $Idtireg_iva =$_POST['Idtireg_iva'];
    $Ob_tri =$_POST['Ob_tri'];
    $Notri_est =$_POST['Notri_est'];
    $Pais_1 =$_POST['Pais_1'];
    $Pais_2 =$_POST['Pais_2'];
    $No_tri1 =$_POST['No_tri1'];
    $No_tri2 =$_POST['No_tri2'];
    $Prov_bie =$_POST['Prov_bie'];
    $Pais_bi =$_POST['Pais_bi'];
    $Ciu_bie =$_POST['Ciu_bie'];
    $Op_ext =$_POST['Op_ext'];
    $Idtiop_m =$_POST['Idtiop_m'];
    $Otro_mo =$_POST['Otro_mo'];
    $Nom_ent =$_POST['Nom_ent'];
    $Idtipro_m  =$_POST['Idtipro_m'];
    $Otro_mo2 =$_POST['Otro_mo2'];
    $No_pro =$_POST['No_pro'];
    $Mo_pro =$_POST['Mo_pro'];
    $Moneda =$_POST['Moneda'];
    $Ciu_ent =$_POST['Ciu_ent'];
    $Pa_ent =$_POST['Pa_ent'];
    $Idtien_re =$_POST['Idtien_re'];
    $Idti_soli =$_POST['Idti_soli'];
    $No_solicit =$_POST['No_solicit'];
    $Nom_solicit =$_POST['Nom_solicit'];
    $Firma =$_POST['Firma'];
    $Cod_vend =$_POST['Cod_vend'];
    $Nom_vend =$_POST['Nom_vend'];
    $Oficina =$_POST['Oficina'];
    $Obser =$_POST['Obser'];
    $Firma_vend =$_POST['Firma_vend'];
    $query ="insert into vendedor(Cod_vend,Nom_vend,Oficina,Obser,Firma_vend) values ('$Cod_vend','$Nom_vend','$Oficina','$Obser','$Firma_vend')";
    $resultado = mysqli_query( $conexion ,$query);
    if($resultado == 1){
    $query ="insert into solicitante(Idti_soli,No_solicit,Nom_solicit, Firma) values ('$Idti_soli','$No_solicit','$Nom_solicit','$Firma')";
    $resultado2 = mysqli_query($conexion, $query);
        if ($resultado2 == 1) {
        $query="insert into client_co(No_ide,Idti_solicit,Fec_dil,Pri_nom,Seg_nom,Pri_ape,Seg_ape,Idti_doc,Lug_exp,Fec_exp,Fec_nac,Ciu_nac,Id_gen,Idest_ci,Id_nac,Otr_nac,Dir_re,Blo_to,Ap_ca,Barrio,Ciu_mu,Depart,Pais,Telef,Celular,Corr_ele,Profe,Idocu_ofii,Det_act,Cod_ciuu,No_emp,Nom_emp,Dir_emp,Barr_lab,Ciu_lab,Dep_lab,Pais_lab,Tel_lab,Ext,Cel_lab,Corr_lab,Ing_men,Otr_ing,Det_otr,To_act,To_pa,To_egr,Vent_a,Fe_ci,Dec_rent,Age_ret,Idtireg_iva,Ob_tri,Notri_est,Pais_1,Pais_2,No_tri1,No_tri2,Prov_bie,Pais_bi,Ciu_bie,Op_ext,Idtiop_m,Otro_mo,Nom_ent,Idtipro_m,Otro_mo2,No_pro,Mo_pro,Moneda,Ciu_ent,Pa_ent,Idtien_re,No_solicit,Cod_vend) 
        values ('$No_ide','$Idti_solicit','$Fec_dil','$Pri_nom','$Seg_nom','$Pri_ape','$Seg_ape','$Idti_doc','$Lug_exp','$Fec_exp','$Fec_nac','$Ciu_nac','$Id_gen','$Idest_ci','$Id_nac','$Otr_nac','$Dir_re','$Blo_to','$Ap_ca','$Barrio','$Ciu_mu','$Depart','$Pais','$Telef','$Celular','$Corr_ele','$Profe','$Idocu_ofii','$Det_act','$Cod_ciuu','$No_emp','$Nom_emp','$Dir_emp','$Barr_lab','$Ciu_lab','$Dep_lab','$Pais_lab','$Tel_lab','$Ext','$Cel_lab','$Corr_lab','$Ing_men','$Otr_ing','$Det_otr','$To_act','$To_pa','$To_egr','$Vent_a','$Fe_ci','$Dec_rent','$Age_ret','$Idtireg_iva','$Ob_tri','$Notri_est','$Pais_1','$Pais_2','$No_tri1','$No_tri2','$Prov_bie','$Pais_bi','$Ciu_bie','$Op_ext','$Idtiop_m','$Otro_mo','$Nom_ent','$Idtipro_m','$Otro_mo2','$No_pro','$Mo_pro','$Moneda','$Ciu_ent','$Pa_ent','$Idtien_re','$No_solicit','$Cod_vend')";
         $resultado3 = mysqli_query($conexion, $query);
        if($resultado3 == 1){
        //intermedia tipo de solicitud
            $query ="insert into clien_tip(Idti_sol,No_ide) values ('$Idti_sol','$No_ide')";
            $resultado4 = mysqli_query($conexion, $query);
            }else{
                echo("error en la tercera insersion");
            }
    } else{
        echo("error en la segunda insersion");
    }
} else{
    echo("error en la primera insersion");
}
    header("HTTP/1.1 200 OK");
    exit();
}

//Crud Completa

//Registro de Usuarios

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $Id_usu=$_POST['Id_usu'];
    $Usuario=$_POST['Usuario'];
    $Contra=$_POST['Contra'];
    $Idti_rol=$_POST['Idti_rol'];
    $query="insert into reg_usu(Id_usu, Usuario, Contra, Idti_rol) values ('$Id_usu', '$Usuario', '$Contra','$Idti_rol')";
    $queryAutoIncrement="select MAX(Id_usu) as Id_usu from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}
//Actualizacion de usuarios

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $Id_usu=$_POST['Id_usu'];
    $Usuario=$_POST['Usuario'];
    $Contra=$_POST['Contra'];
    $Idti_rol=$_POST['Idti_rol'];
    $query="UPDATE reg_usu SET Id_usu='$Id_usu', Usuario='$Usuario', Contra='$Contra' , Idti_rol='$Idti_rol' WHERE Id_usu='$Id_usu'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

//Eliminacion de usuarios

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $Id_usu=$_GET['Id_usu'];
    $query="DELETE FROM reg_usu WHERE Id_usu='$Id_usu'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>