$(document).ready(function() {
    $('#registroForm').on('submit', function(event) {
      event.preventDefault();
      
      const nombre = $('#nombre').val();
      const email = $('#email').val();
      const password = $('#password').val();

      // Guardar los datos del usuario en localStorage
      const usuario = { nombre, email };
      localStorage.setItem('usuario', JSON.stringify(usuario));

      // Mostrar mensaje de registro correcto
      $('#registroCorrecto').show();

      // Redirigir a la página principal después de un breve retraso
      setTimeout(function() {
        window.location.href = 'index.html';
      }, 2000);
    });
  });