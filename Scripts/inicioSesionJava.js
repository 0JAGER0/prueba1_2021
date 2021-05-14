$("#formulario").validate({
    rules: {         
      usuario: "required",
      contraseña: "required"
    },   
    messages: {
      usuario: "Por favor ingrese su nombre de usuario",
      contraseña: "Por favor ingrese su contraseña",
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

