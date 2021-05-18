$("#formulario").validate({
    rules: {         
      usuario: "required",
      contraseña: {
        required: true,
        minlength: 5
    }
    },   
    messages: {
      usuario: "Por favor ingrese su nombre de usuario",
      contraseña: {
        required: "Por favor ingrese su contraseña",
        minlength : "la contraseña no puede tener menos de 5 caracteres"
      },
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

