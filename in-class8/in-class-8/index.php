<?php
require 'models/User.php';
require 'controllers/UserController.php';

use controllers\UserController;

$controller = new UserController();
$controller->index();