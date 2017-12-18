<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

const FILE_NAME = "todos.json";

try {
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    $todos  = [
        "success"   => false,
        "data"      => [],
    ];

    if(!file_exists("todos.json")){

        $todos = new \stdClass();
        $todos->created = date("Y-m-d H:i:s");
        $todos->modified = date("Y-m-d H:i:s");
        $todos->data = [];
        file_put_contents(FILE_NAME, json_encode($todos));
        chmod(0777, FILE_NAME);
    }

    switch($requestMethod){
        case "GET":
            $todos = json_decode(file_get_contents(FILE_NAME));
        break;

        case "POST":
            $todos = json_decode(file_get_contents(FILE_NAME));

            $json = file_get_contents('php://input');
            $obj = json_decode($json);
            $newTodo = $obj->todo;
            $todos->data[] = $newTodo;
            file_put_contents(FILE_NAME, json_encode($todos));
        break;

        case "DELETE":
            $todos  = json_decode(file_get_contents(FILE_NAME));
            $json   = file_get_contents('php://input');
            $obj    = json_decode($json);
            
            $index = array_search($obj, $todos->data);
            unset($todos->data[$index]);
            $todos->modified = date("Y-m-d H:i:s");
            file_put_contents(FILE_NAME, json_encode($todos));
        break;

        case "OPTIONS": break;


        default:
            throw new Exception("UNKNOWN REQUEST TYPE '$requestMethod'", 500);
    }

    echo json_encode($todos);
    


} catch (Exception $ex) {
    $header = $ex->getCode() . " " . $ex->getMessage();
    header("HTTP/1.0 " . $header);
}

exit;
