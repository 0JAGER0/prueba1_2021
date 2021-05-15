$("#formulario").validate({
    rules: {         
      nombres: "required",
      apellidos: "required",
      usuario: "required",
      correo: "required",
      contraseña: "required"
    },   
    messages: {
      nombres: "Por favor ingrese sus nombres",
      apellidos: "Por favor ingrese sus apellidos",
      usuario: "Por favor ingrese su nombre nuevo de usuario",
      correo: "Por favor ingrese su correo",
      contraseña: "Por favor ingrese la contraseña"
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

