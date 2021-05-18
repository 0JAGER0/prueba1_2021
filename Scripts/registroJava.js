$("#formulario").validate({
    rules: {         
      nombres: "required",
      apellidos: "required",
      usuario: "required",
      correo: "required",
      contraseña: {
        required: true,
        minlength: 5
    }
    },   
    messages: {
      nombres: "Por favor ingrese sus nombres",
      apellidos: "Por favor ingrese sus apellidos",
      usuario: "Por favor ingrese su nombre nuevo de usuario",
      correo: "Por favor ingrese su correo",
      contraseña: {
        required: "Por favor ingrese su contraseña",
        minlength : "la contraseña no puede tener menos de 5 caracteres"
      }
    },
    submitHandler: function(form) {
      form.submit();
    },
    highlight: function(element, errorClass) {
      $(element).fadeOut(function() {
        $(element).fadeIn();
      });
    }
  });

