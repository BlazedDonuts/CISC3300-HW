<?php
namespace models;

class User {
    public function getAllUsers() {
        return [
            ["id"=> 1,"name"=> "Chicken"],
            ["id"=> 2,"name"=> "Goat"],
            ["id"=> 3,"name"=> "Cow"],
        ];
    }
}