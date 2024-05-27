$(document).ready(function(){
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const carritoCount = $('#carrito-count');
  const carritoDropdown = $('#carrito-dropdown');

  function actualizarCarrito() {
    carritoCount.text(carrito.length);
    carritoDropdown.empty();
    carrito.forEach(producto => {
      carritoDropdown.append(`<li><span class="dropdown-item-text">${producto.nombre}</span> - $${producto.precio}</li>`);
    });
  }

  $('.add-to-cart').click(function(){
    let producto = $(this).closest('.product-card');
    let nombre = producto.find('.card-title').text();
    let precio = parseFloat($(this).data('precio'));
    let cantidad = parseInt(producto.find('.cantidad').val());
    let productoAgregado = { nombre: nombre, precio: precio, cantidad: cantidad };
    carrito.push(productoAgregado);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
    alert('Producto agregado al carrito');
  });

  $('.restar-cantidad').click(function(){
    let cantidadInput = $(this).siblings('.cantidad');
    let cantidad = parseInt(cantidadInput.val());
    if(cantidad > 1) {
      cantidadInput.val(cantidad - 1);
    }
  });

  $('.sumar-cantidad').click(function(){
    let cantidadInput = $(this).siblings('.cantidad');
    let cantidad = parseInt(cantidadInput.val());
    cantidadInput.val(cantidad + 1);
  });

  actualizarCarrito();
});
