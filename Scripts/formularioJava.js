$("#formulario").validate({
    rules: {         
      nombre: "required",
      mensaje: {
          required: true
      },
      correo: {
        required: true,
        email: true
      },
      telefono: {
        required: true    
      }
    },
    
    messages: {
      nombre: "Por favor ingrese el nombre completo ",
      mensaje: "Por favor llene este campo",
      correo: "Por favor ingrese el correo",
      telefono: "Por favor ingrese numero telefonico"
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



  