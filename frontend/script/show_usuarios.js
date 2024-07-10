       let usuarios_id;
       
       async function capturarDatosDesdeAPI() {
            try {

                let token = localStorage.getItem('authToken');
                
                let response = await fetch('/api/usuarios', {

                    method: 'GET',
                    headers: {
                      'Authorization': 'Bearer ' + token,
                      'Content-Type': 'application/json'
                }});
                
                if (!response.ok) {
                    throw new Error('Error al obtener datos de la API');
                }
                let data = await response.json();
                llenarTabla(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        function llenarTabla(datos) {
           
            let laTabla = document.querySelector("#Usuarios tbody");

            laTabla.innerHTML = "";

            if (datos.length === 0) return;

            datos.forEach(usuario => {
                let row = document.createElement("tr");
                
                
                let celdaId = document.createElement("td");
                celdaId.innerText = usuario.id || '';
                row.appendChild(celdaId);

                let celdaNombre = document.createElement("td");
                celdaNombre.innerText = usuario.nombre || '';
                row.appendChild(celdaNombre);
                
                let celdaEmail = document.createElement("td");
                celdaEmail.innerText = usuario.email || '';
                row.appendChild(celdaEmail);

                let celdaDir = document.createElement("td");
                celdaDir.innerText = usuario.direccion || '';
                row.appendChild(celdaDir);
                
                let celdaTel = document.createElement("td");
                celdaTel.innerText = usuario.telefono || '';
                row.appendChild(celdaTel);

                let celdaRol = document.createElement("td");
                celdaRol.innerText = usuario.rol_id || '';
                row.appendChild(celdaRol);
                
                let celdaAcciones = document.createElement("td");
                celdaAcciones.innerHTML = '<a class="btn btn-warning m" href="javascript: abrirModal('+usuario.id+')">Editar</a><a class="btn btn-danger ms-2" href="javascript: eliminarUsuario('+usuario.id+')">Eliminar</a>';
                row.appendChild(celdaAcciones);

                celdaId.style.cssText = 'text-align: center';
                celdaRol.style.cssText = 'text-align: center';
                celdaAcciones.style.cssText = 'text-align: center';
                
                laTabla.appendChild(row);
            });
        }

        

        async function abrirModal (id) {

          let roles = await getAllRoles();
          console.log(roles);
          llenarComboRoles(roles);
          let token = localStorage.getItem('authToken');
          var myModal = new bootstrap.Modal(document.getElementById('myModal'));

            limpiarFormulario();
            $("#titulo_modal").text("Crear Usuario");
            $('#btn_crear').show()
            $('#btn_editar').hide()
          if (id !== null) {

            $('#btn_crear').hide()
            $('#btn_editar').show()

            usuarios_id =id;
            let response = await fetch('/api/usuarios/' + id, {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }}
             );
                if (!response.ok) {
                    throw new Error('Error al obtener datos de la API');
                }
            let data = await response.json();
                
            $('#usuario_nombre').val(data[0].nombre);
            $('#usuario_email').val((data[0].email));
            $('#usuario_direccion').val((data[0].direccion));
            $('#usuario_telefono').val((data[0].telefono));
            $('#usuario_rol').val((data[0].rol_id));

            $("#titulo_modal").text("Editar Usuario");
                   
          }  
          myModal.show();
          
        }

        async function getAllRoles() {

          let token = localStorage.getItem('authToken');
          
            let response = await fetch('/api/roles/', {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }}
             );
                if (!response.ok) {
                    throw new Error('Error al obtener datos de la API');
                }
            let data = await response.json();
            return data    
            
          }  

        function llenarComboRoles(listaDeRoles){
          $("#usuario_rol").html("");
          listaDeRoles.forEach(role =>{
              let option = $("<option></option>").val(role.id).text(role.descripcion);
              $("#usuario_rol").append(option);
            });
        }
          

        function crearUsuario () {
          let token = localStorage.getItem('authToken');

          let nombre = $('#usuario_nombre').val();
          let email = $('#usuario_email').val();
          let direccion = $('#usuario_direccion').val();
          let tel = $('#usuario_telefono').val();
          let rol = $("#usuario_rol").val();
          let password = "1234";


          if (!nombre || !email || !direccion || !tel || !rol || !password) {
            alert('Todos los campos son obligatorios');
            return;
        }

          var settings = {
              "url": "/api/usuarios",
              "method": "POST",
              "timeout": 0,
              "headers": {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
              "data": JSON.stringify({
                "nombre": nombre,
                "email": email,
                "direccion": direccion,
                "telefono": tel,
                "pass": password,
                "rol_id": rol,
              }),
            };
            
            $.ajax(settings).done(function (response) {
              console.log(response);
              alert(response.message);
              location.reload();

            }).fail(function (jqXHR, textStatus, errorThrown) {
              console.error('Error:', textStatus, errorThrown);
              alert('Error al crear usuario: ' + jqXHR.responseJSON.message);
            });

        }

        function editarUsuario () {
          let token = localStorage.getItem('authToken');

          let nombre = $('#usuario_nombre').val();
          let email = $('#usuario_email').val();
          let direccion = $('#usuario_direccion').val();
          let tel = $('#usuario_telefono').val();
          let rol = $('#usuario_rol').val();

          var settings = {
              "url": "/api/usuarios/" + usuarios_id,
              "method": "PUT",
              "timeout": 0,
              "headers": {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
              "data": JSON.stringify({
                "nombre": nombre,
                "email": email,
                "direccion": direccion,
                "telefono": tel,
                "rol_id": rol,
              }),
            };
            
            $.ajax(settings).done(function (response) {
              console.log(response);
              alert(response.message);
              location.reload();
            });

        }

        async function eliminarUsuario (id) {
          let token = localStorage.getItem('authToken');
          console.log(token);

          if(confirm("¿Estás seguro de que deseas eliminar esto?")) {
           
            let response = await fetch('/api/usuarios/'+ id, {
              method: 'DELETE',
              headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              }
          });
          if (!response.ok) {
              alert ('Error al eliminar el dato');
          }
          else {
              alert ('Usuario eliminado');
              capturarDatosDesdeAPI();
          }
          }
        }

        capturarDatosDesdeAPI();

        function limpiarFormulario() {

          $('#usuario_nombre').val("");
          $('#usuario_email').val("");
          $('#usuario_direccion').val("");
          $('#usuario_telefono').val("");
          $('#usuario_rol').val("");

        }

