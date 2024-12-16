<?php
// echo "Hola, respuesta desde el servidor";

// Imprimir la informacion de o los archvios
// var_dump($_FILES);

// Verificar si existe archvio 
if(isset($_FILES["file"])){
    $name = $_FILES["file"]["name"];
    $file = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];
    $destination = "../files/$name";

    $upload = move_uploaded_file($file, $destination);

    if($upload){
        $res = array(
            "err" => false,
            "status" => http_response_code(200),
            "statusText" => "Archivo $name subido con exito",
            "files" => $_FILES["file"]
        );
    }else{
        $res = array(
            "err" => true,
            "status" => http_response_code(400),
            "statusText" => "Error al subir el archivo $name",
            "files" => $_FILES["file"]
        );
    }

    echo json_encode($res);
}

