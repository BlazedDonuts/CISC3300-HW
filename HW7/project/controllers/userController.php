<?php

require '../models/User.php';

class UserController {
    public function showUsersPage() {
        include '../views/users.html';
    }

    public function getUsersJson() {
        header("Content-type: application/json");
        echo json_encode(User::getAllUsers());
    }
}