<?php

// Comprobar valores
if (!empty($_POST['valorA']) and !empty($_POST['valorB'])) {

    // Obtenr valores desde JS AJAX
    $valorA = $_POST['valorA'];
    $valorB = $_POST['valorB'];

    // Resultado
    $suma = $valorA + $valorB;

    echo $suma;
} else {

    echo 'Introduce los dos VALORES!';
}
