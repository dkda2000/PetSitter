// BUSCAR EL ERROR PARA MOSTRAR EN PANTALLA

var EVENTS_API = "https://api.mercadolibre.com/sites/MLA/search?seller_id=117034080&limit=10";

async function getDataEvents() {

    //Captura la respuesta de la API
    const response = await fetch(`${EVENTS_API}`);

    //logueo la respuesta
    console.log(response)
    
    //convierto la promesa recibida en un json y la guarda
    const json = await response.json();

    //logueo la respuesta
    console.log(json)

    //logueo la respuesta
    console.log(json.results)

    //asigno el valor del result a data
    
    const data = json.results

    return data
  }
  
  async function displayCard() {
    let datos = await getDataEvents();
    var templateCard = "";

    datos.forEach(Item => {

        let foto = (Item.thumbnail).replace ("-I","-E");

        templateCard += `<div style="float:left; margin:10px" class="col-md-3 mb-4">
        <div class="card">
            <img src="${foto}" class="card-img-top" alt="purinagatoejemplo">
            <div class="card-body">
                <h5 class="card-title">${Item.title}</h5>
                <p class="card-text">${Item.price}</p>
                <a href="#" class="btn btn-primary">Botón</a>
            </div>
        </div>
    </div>`
   
    });

    document.getElementById('Card').innerHTML = templateCard;
  }
  
  displayCard();
