// Obtener los datos del input
function obtenerDatos() {
    valorA = $('#valorA').val();
    valorB = $('#valorB').val();

    // Funcion AJAX
    $.ajax({
        url: 'funciones.php',
        type: 'post',
        data: { valorA: valorA, valorB: valorB },
        success: function (respuesta) {
            $('#resultado').html(respuesta);
        }
    })

    // Restablecer valores
    $('#valorA').val('');
    $('#valorB').val('');

}