$(document).ready(function() {
    $('#registroForm').submit(function(e) {
        e.preventDefault();
		

        // Validar campos antes de enviar el formulario
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (nombre.trim() === '') {
            alert('Por favor ingresa tu nombre completo.');
            return;
        }

        if (email.trim() === '') {
            alert('Por favor ingresa tu correo electrónico.');
            return;
        }

        // Validar formato de correo electrónico
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor ingresa un correo electrónico válido.');
            return;
        }

        if (password.trim() === '') {
            alert('Por favor ingresa una contraseña.');
            return;
        }

        // Validar longitud de la contraseña
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Si todas las validaciones pasan, enviar el formulario
        $('#registroCorrecto').show();
        setTimeout(function() {
            $('#registroForm')[0].reset();
            $('#registroCorrecto').hide();
        }, 2000);
    });
});

  
  $('#payment-form').submit(function(event){
    event.preventDefault();
    $('#payment-success').show();
  });
});

function loadSection(section) {
  $('#main-content').load(section + '.html');
  event.preventDefault();
}



