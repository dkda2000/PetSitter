//let algunasPersonas = [{"nombre" :"eze", "apellido": "vel"}, {"nombre" : "juan", "apellido" : "perez"}];

//llenarTabla(algunasPersonas);

// Si se quiere tomar los datos que vienen de un form por url:
capturarDatosPasadosEnLaURL();	
function capturarDatosPasadosEnLaURL(){			
  let params = new URLSearchParams(window.location.search);	
  let result = {}
    for(let [key, value] of params) { 
    result[key] = value;
    }
  let resArray = [];	
  resArray.push(result);		
  console.log(resArray);
  llenarTabla(resArray);
}	

	function llenarTabla(pedido){

		// Capturar la tabla en una variable
		let laTabla = document.querySelector("#Pedidos");
    
    laTabla.classList.add("tablapedidos")

    let campos = Object.keys(pedido[0]); 

    for(let i=0; i< campos.length; i++){

      let campo = campos[i];
      let valorCampo = pedido[0][campo];
      let row = document.createElement("tr");
      let celdaCampo = document.createElement("td");
		  let celdaValor = document.createElement("td");

      //celdaCampo.style.cssText = 'color:red;background-color:yellow';
      
      row.classList.add("filaspedidos")
      celdaCampo.classList.add("celdaspedidos")
      celdaCampo.classList.add("columnarightpedidos")
      celdaValor.classList.add("columnaleftpedidos")
      celdaValor.classList.add("celdaspedidos")


      celdaCampo.innerText = campo;
      celdaValor.innerText = valorCampo;

      row.appendChild(celdaCampo);
		  row.appendChild(celdaValor);		

      laTabla.appendChild(row);
    }

  }