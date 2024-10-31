<?php

require 'controllers/userController.php';
$controller = new UserController();

//check method request + uri
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

if($requestMethod === 'GET' && $requestUri === '/users') {
    $controller->getUsersJson();
}
else {
    $controller->showUsersPage();
}