<?php
$nombre = $_POST['nombre'];
echo json_encode(array(
	'Mensaje' => sprintf('Se recibio el correo de %s',$nombre)
	));
