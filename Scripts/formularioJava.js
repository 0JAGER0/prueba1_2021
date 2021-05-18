$("#formulario").validate({
    rules: {  
      rut: {
        required: true,
        minlength: 11
      },      
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
      telefono: "Por favor ingrese numero telefonico",
      rut: {
        required: "Por favor ingrese el rut o pasaporte",
        minlength: "El rut o pasaporte debe ser como minimo de 11 caracteres contando el punto y guion"
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



