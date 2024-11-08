<?php

function validateEmail($email) {
    if (empty($email)) {
        throw new Exception("Email address is required.");
    }
    return "Email is valid!";
}

try {
    echo validateEmail("");
}
catch (Exception $e) { 
    echo "error" . $e->getMessage();
}