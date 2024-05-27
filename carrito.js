$(document).ready(function(){
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let usuario = JSON.parse(localStorage.getItem('usuario'));

  function actualizarCarrito(){
    let listaProductos = $('#lista-productos');
    listaProductos.empty();
    let total = 0;
    carrito.forEach(function(producto, index){
      let precioTotalProducto = producto.precio * producto.cantidad;
      listaProductos.append(`<li class="list-group-item">${producto.cantidad} x ${producto.nombre} - $${precioTotalProducto.toLocaleString('es-CL')} <button class="btn btn-danger btn-sm float-end eliminar-producto" data-index="${index}">Eliminar</button></li>`);
      total += precioTotalProducto;
      // Agregar seguimiento del producto comprado
      trackProductoComprado(producto.nombre, producto.precio, producto.cantidad);
    });
    $('#total').text('$' + total.toLocaleString('es-CL'));
  }

  function mostrarUsuario() {
    if (usuario) {
      $('#usuario-info').text(`Bienvenido, ${usuario.email}`);
    } else {
      $('#usuario-info').text('No has iniciado sesión');
    }
  }

  // Mostrar productos del carrito al cargar la página
  actualizarCarrito();
  mostrarUsuario();

  // Vaciar carrito
  $('#vaciar-carrito').click(function(){
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  });

  // Eliminar producto del carrito
  $('#lista-productos').on('click', '.eliminar-producto', function(){
    let index = $(this).data('index');
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  });

  // Función para realizar el seguimiento del producto comprado
  function trackProductoComprado(nombreProducto, precioProducto, cantidad){
    // Aquí puedes implementar tu código de seguimiento, por ejemplo, enviar los datos a un sistema de análisis
    console.log(`Producto comprado: ${nombreProducto}, Precio: ${precioProducto}, Cantidad: ${cantidad}`);
  }

  // Agregar producto al carrito cuando se selecciona el checkbox
  $('.seleccionar-producto').change(function(){
    let precio = $(this).data('precio');
    let nombre = $(this).data('producto');
    let cantidad = parseInt(prompt(`¿Cuántos ${nombre} desea agregar al carrito?`, 1));
    if (!isNaN(cantidad) && cantidad > 0) {
      carrito.push({nombre: nombre, precio: precio, cantidad: cantidad});
      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarCarrito();
    }
    // Desmarcar el checkbox después de agregar el producto
    $(this).prop('checked', false);
  });
});
