
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

	function llenarTabla(contacto){

		// Capturar la tabla en una variable
		let laTabla = document.querySelector("#Contacto");
    
    laTabla.classList.add("tablacontactos")

    let campos = Object.keys(contacto[0]); 

    for(let i=0; i< campos.length; i++){

      let campo = campos[i];
      let valorCampo = contacto[0][campo];
      let row = document.createElement("tr");
      let celdaCampo = document.createElement("td");
		  let celdaValor = document.createElement("td");

      //celdaCampo.style.cssText = 'color:red;background-color:yellow';
      
      // row.classList.add("filaspedidos")
      // celdaCampo.classList.add("celdaspedidos")
      // celdaCampo.classList.add("columnarightpedidos")
      // celdaValor.classList.add("columnaleftpedidos")
      // celdaValor.classList.add("celdaspedidos")


      celdaCampo.innerText = campo;
      celdaValor.innerText = valorCampo;

      row.appendChild(celdaCampo);
		  row.appendChild(celdaValor);		

      laTabla.appendChild(row);
    }

  }