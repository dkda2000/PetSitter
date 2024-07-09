       let producto_id;
       
       async function capturarDatosDesdeAPI() {
            try {
                
                let response = await fetch('/api/productos');
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
            // Capturar el tbody en una variable
            let laTabla = document.querySelector("#Productos tbody");

            laTabla.innerHTML = "";

            if (datos.length === 0) return;

            datos.forEach(producto => {
                let row = document.createElement("tr");
                
                // Crea celdas para cada campo que coincida con los encabezados
                let celdaId = document.createElement("td");
                celdaId.innerText = producto.id || '';
                row.appendChild(celdaId);

                let celdaMarca = document.createElement("td");
                celdaMarca.innerText = producto.nombre || '';
                row.appendChild(celdaMarca);
                
                let celdaDescripcion = document.createElement("td");
                celdaDescripcion.innerText = producto.descripcion || '';
                row.appendChild(celdaDescripcion);

                let celdaPrecio = document.createElement("td");
                celdaPrecio.innerText = producto.precio || '';
                row.appendChild(celdaPrecio);
                
                let celdaStock = document.createElement("td");
                celdaStock.innerText = producto.stock || '';
                row.appendChild(celdaStock);
                
                let celdaAcciones = document.createElement("td");
                celdaAcciones.innerHTML = '<a class="btn btn-warning m" href="javascript: abrirModal('+producto.id+')">Editar</a><a class="btn btn-danger ms-2" href="javascript: eliminarProducto('+producto.id+')">Eliminar</a>';
                row.appendChild(celdaAcciones);

                celdaId.style.cssText = 'text-align: center';
                celdaStock.style.cssText = 'text-align: center';
                celdaAcciones.style.cssText = 'text-align: center';
                
                laTabla.appendChild(row);
            });
        }

        

        async function abrirModal (id) {
          var myModal = new bootstrap.Modal(document.getElementById('myModal'));

            limpiarFormulario();
            $("#titulo_modal").text("Crear Producto");
            $('#btn_crear').show()
            $('#btn_editar').hide()
          if (id !== null) {

            $('#btn_crear').hide()
            $('#btn_editar').show()

            producto_id =id;
            let response = await fetch('/api/productos/' + id);
                if (!response.ok) {
                    throw new Error('Error al obtener datos de la API');
                }
            let data = await response.json();
                
            $('#producto_nombre').val(data[0].nombre);
            $('#producto_descripcion').val((data[0].descripcion));
            $('#producto_precio').val((data[0].precio));
            $('#producto_stock').val((data[0].stock));
            $('#producto_categoria').val((data[0].categoria_id));

            $("#titulo_modal").text("Editar Producto");
                   
          }  
          myModal.show();
          
        }

        function crearProducto () {
          let token = localStorage.getItem('authToken');

          let nombre = $('#producto_nombre').val();
          let descripcion = $('#producto_descripcion').val();
          let precio = $('#producto_precio').val();
          let stock = $('#producto_stock').val();
          let categoria = $('#producto_categoria').val();

          var settings = {
              "url": "/api/productos",
              "method": "POST",
              "timeout": 0,
              "headers": {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
              "data": JSON.stringify({
                "nombre": nombre,
                "descripcion": descripcion,
                "precio": precio,
                "stock": stock,
                "categoria": 1,
              }),
            };
            
            $.ajax(settings).done(function (response) {
              console.log(response);
              alert(response.message);
              location.reload();
            });

        }

        function editarProducto () {
          let token = localStorage.getItem('authToken');

          let nombre = $('#producto_nombre').val();
          let descripcion = $('#producto_descripcion').val();
          let precio = $('#producto_precio').val();
          let stock = $('#producto_stock').val();
          let categoria = $('#producto_categoria').val();

          var settings = {
              "url": "/api/productos/" + producto_id,
              "method": "PUT",
              "timeout": 0,
              "headers": {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
              "data": JSON.stringify({
                "nombre": nombre,
                "descripcion": descripcion,
                "precio": precio,
                "stock": stock,
                "categoria": 1,
              }),
            };
            
            $.ajax(settings).done(function (response) {
              console.log(response);
              alert(response.message);
              location.reload();
            });

        }

        async function eliminarProducto (id) {
          let token = localStorage.getItem('authToken');
          console.log(token);

          if(confirm("¿Estás seguro de que deseas eliminar esto?")) {
           
            let response = await fetch('/api/productos/'+ id, {
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
              alert ('Producto eliminado');
              capturarDatosDesdeAPI();
          }
          }
        }

        capturarDatosDesdeAPI();

        function limpiarFormulario() {

          $('#producto_nombre').val("");
          $('#producto_descripcion').val("");
          $('#producto_precio').val("");
          $('#producto_stock').val("");
          $('#producto_categoria').val("");

        }