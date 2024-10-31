<?php 

//constructors
class Pet {
    private $name;
    private $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    //getters and setters
    public function getName(){
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getAge(){
        return $this->age;
    }

    public function setAge($age) {
        $this->age = $age;
    }

    //method
    public static function createPet($name, $age) {
        return new self($name, $age);
    }
}


