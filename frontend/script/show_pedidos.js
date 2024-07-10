       
       async function capturarDatosDesdeAPI() {
            try {

                let token = localStorage.getItem('authToken');
                
                let response = await fetch('/api/pedidos', {

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
            
            let laTabla = document.querySelector("#Pedidos tbody");

            laTabla.innerHTML = "";

            if (datos.length === 0) return;

            datos.forEach(pedido => {
                let row = document.createElement("tr");
                
              
                let celdaId = document.createElement("td");
                celdaId.innerText = pedido.id || '';
                row.appendChild(celdaId);

                let celdaFecha = document.createElement("td");
                celdaFecha.innerText = pedido.fecha.split("T")[0] || '';
                row.appendChild(celdaFecha);

                let celdaNombre = document.createElement("td");
                celdaNombre.innerText = pedido.nombre || '';
                row.appendChild(celdaNombre);
                
                let celdaDir = document.createElement("td");
                celdaDir.innerText = pedido.direccion || '';
                row.appendChild(celdaDir);
                
                let celdaEstado = document.createElement("td");
                celdaEstado.innerText = pedido.estado || '';
                row.appendChild(celdaEstado);

                let celdaTotal = document.createElement("td");
                celdaTotal.innerText = pedido.total || '';
                row.appendChild(celdaTotal);
                
                celdaId.style.cssText = 'text-align: center';
                celdaEstado.style.cssText = 'text-align: center';
                celdaTotal.style.cssText = 'text-align: center';
                                
                laTabla.appendChild(row);
            });
        }

        capturarDatosDesdeAPI();
       