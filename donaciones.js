$(document).ready(function(){
    // Consumir el archivo JSON de productos
    $.getJSON("productos.json", function(data) {
        // Manejar los datos de los productos
        console.log("Productos:", data);
    });

    // Consumir el archivo JSON de organizaciones
    $.getJSON("organizaciones.json", function(data) {
        // Manejar los datos de las organizaciones
        console.log("Organizaciones:", data);
    });

    $('#donationForm').submit(function(event){
        event.preventDefault();
        $('#subscriptionMessage').show();
    });
});
