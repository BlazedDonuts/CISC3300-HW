<?php 

//associative array
$myArray = [
    "name" => "Ben",
    "age" => 10,
];

//loop
foreach($myArray as $key => $value) {
    echo "$key: $value<br>";
}

//function
function helloIntro(string $name, string $intro = "HEY!"): string {
    return "$intro, $name";
;}

//calling function
echo helloIntro("Jerry");
echo "<br>";
echo helloIntro("Jerry", "La Di Da");
