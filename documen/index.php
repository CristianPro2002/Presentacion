<?php 

require 'FPDF/fpdf.php';

$mysqli = new mysqli("localhost","root","","banca4.0");

if(mysqli_connect_errno()){
    echo 'Conexion fallida: ', mysqli_connect_errno();
    exit();
}

$query = "SELECT * FROM prueba";
$resultado = $mysqli->query($query);

$pdf = new FPDF();
$pdf->AliasNbPages();
$pdf->AddPage();

$pdf->setFillColor(232, 232, 232);
$pdf->SetFont('Arial','B',12);
$pdf->Cell(20, 6,'ID', 1, 0, 'C', 1);
$pdf->Cell(40, 6,'FECHA', 1, 0, 'C', 1);
$pdf->Cell(40, 6,'TIP_PRO', 1, 0, 'C', 1);
$pdf->Cell(40, 6,'VALOR', 1, 0, 'C', 1);
$pdf->Cell(50, 6,'CAJERO', 1, 1, 'C', 1);

$pdf->setFont('Arial', '', 10);

while($fila = $resultado->fetch_assoc()){
    $pdf->Cell(20, 6, $fila['Id_act'], 1, 0, 'C');
    $pdf->Cell(40, 6, utf8_decode($fila['Fecha_act']), 1, 0, 'C');
    $pdf->Cell(40, 6, utf8_decode($fila['Tip_pro']), 1, 0,'C');
    $pdf->Cell(40, 6, utf8_decode($fila['Valor_act']), 1, 0, 'C');
    $pdf->Cell(50, 6, utf8_decode($fila['Cajero']), 1, 1,'C');
}

$pdf->Output();
?>




