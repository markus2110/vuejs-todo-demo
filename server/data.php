<?php

const FILE_NAME = "todos.json";

sleep(1);

if(!file_exists("todos.json")){
    file_put_contents(FILE_NAME, json_encode([]));
}


$todos  = [];
$action = $_GET['action'];
$response = [];



switch($action){

    case "getData":
        $todos = json_decode(file_get_contents(FILE_NAME));
    break;




}

echo json_encode($todos);


