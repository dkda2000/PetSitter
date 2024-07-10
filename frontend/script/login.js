// Registrarse

document.getElementById('btn_registrarse').addEventListener('click', function(event) {
    event.preventDefault();
    
    let isValid = true;

    let nombre = $('#tx_nombre').val();
    let email = $('#tx_email').val();
    let direccion = $('#tx_direccion').val();
    let telefono = $('#tx_telefono').val();
    let password = $('#tx_password').val();

      // Valida los datos del registro

            if (nombre.length < 3) {
              isValid = false;
              alert('El nombre debe tener al menos 3 caracteres.');
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                isValid = false;
                alert('Por favor, ingresa un correo electrónico válido.');
            }

            const phonePattern = /^\d{10}$/; 
            if (!phonePattern.test(telefono)) {
                isValid = false;
                alert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
            }

            if (isValid) {
              var settings = {
                "url": "/api/usuarios",
                "method": "POST",
                "timeout": 0,
                "headers": {
                  "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                  "nombre": nombre,
                  "email": email,
                  "direccion": direccion,
                  "telefono": telefono,
                  "pass": password,
                  "rol_id": 1
                }),
              };

              $.ajax(settings).done(function (response) {
                console.log(response);
                alert(response.message);
                location.reload();
              });
          }

  });

  // Iniciar sesión

  document.getElementById('btn_login').addEventListener('click', function(event) {
    event.preventDefault();  
    

    let email = $('#log_email').val();
    let password = $('#log_pass').val();

    var settings = {
        "url": "/api/usuarios/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "email": email,
          "pass": password
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        if (response.auth) {
          guardarTokenLocalStorage(response.token);
          guardarNombreLocalStorage(response.nombre_usuario);
          location.href = "tabla_inicio.html"}
      
        
      })
      
      .fail(function (response) {
        console.log(response);
        alert(response.responseText)});

  });


  // Guardamos el token en el LocalStorage

  function guardarTokenLocalStorage(token) {
    localStorage.setItem('authToken', token);
  }

  // Guardamos el nombre del Usuario en el LocalStorage

  function guardarNombreLocalStorage(nombre) {
    localStorage.setItem('authNombre', nombre);
  }