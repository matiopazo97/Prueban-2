document.getElementById('inicioSesionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    // Verificar credenciales ficticias
    if (email === 'cliente@ejemplo.com' && password === '123456') {
      localStorage.setItem('usuario', JSON.stringify({ email }));
      alert('Inicio de sesión exitoso');
      $('#registroModal').modal('hide');
      mostrarUsuario();
    } else {
      alert('Credenciales inválidas');
    }
  });

  // Simular registro ficticio
  document.getElementById('registroLink').addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Correo electrónico:');
    const password = prompt('Contraseña:');

    if (email && password) {
      localStorage.setItem('usuario', JSON.stringify({ email }));
      alert('Registro exitoso');
      $('#registroModal').modal('hide');
      mostrarUsuario();
    } else {
      alert('Debe ingresar un correo electrónico y una contraseña');
    }
  });

  function mostrarUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
      document.getElementById('usuario-info').textContent = `Bienvenido, ${usuario.email}`;
    } else {
      document.getElementById('usuario-info').textContent = 'No has iniciado sesión';
    }
  }

  mostrarUsuario();