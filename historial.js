

$(document).ready(function() {
  // Función para cargar y mostrar el historial de compras
  function cargarHistorialCompras() {
    // Aquí deberías tener algún mecanismo para obtener la información del historial de compras
    // Por simplicidad, vamos a simular datos de historial de compras
    var historialCompras = [
      { id: 1, fecha: '01/05/2024', productos: 'Producto 1, Producto 2', total: '$50.00' },
      { id: 2, fecha: '03/05/2024', productos: 'Producto 3', total: '$30.00' }
    ];

    // Construir la tabla de historial de compras
    var historialHtml = '';
    historialCompras.forEach(function(compra) {
      historialHtml += '<div class="card mb-3">';
      historialHtml += '<div class="card-header">Compra #' + compra.id + '</div>';
      historialHtml += '<div class="card-body">';
      historialHtml += '<p class="card-text">Fecha: ' + compra.fecha + '</p>';
      historialHtml += '<p class="card-text">Productos: ' + compra.productos + '</p>';
      historialHtml += '<p class="card-text">Total: ' + compra.total + '</p>';
      historialHtml += '</div></div>';
    });

    $('#historial-compras .container').html(historialHtml);
  }

  // Cargar el historial de compras al cargar la página
  cargarHistorialCompras();
});
