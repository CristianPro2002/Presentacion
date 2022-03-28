<?php
$conexion = mysqli_connect("localhost", "root", "", "banca");

$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];
$tipo_rol = $_POST["rol"];

$insertar = "INSERT INTO reg_usu(usuar, contra, tipo_rol) VALUES ('$usuario', '$contraseña', '$tipo_rol')"

$resultados = mysqli_query($conexion, $insertar);

mysqli_close($conexion);

?>
