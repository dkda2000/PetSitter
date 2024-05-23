

var EVENTS_API = "https://api.mercadolibre.com/sites/MLA/search?seller_id=117034080&limit=12";

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
        let limiteCaracteres = 48

        templateCard += `<div class="col-md-3 col-sm-12 mb-3">
        <div class="card" style ="width: 250px; height: 410px">
            <img src="${foto}" class="card-img-top" alt="purinagatoejemplo">
            <div class="card-body">
                <p class="card-title">${Item.title.substring(0,limiteCaracteres)+"..."}</p>
                <div class="row" style="margin-top:20px">
                    <div class="col-6" style="margin-top:5px">
                        <h5>${"$"+Item.price}</h5>
                    </div>
                    <div class="col-6">
                    <a href="error404.html" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="25" fill="currentColor" class="iconaranja"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        
   
    });

    document.getElementById('Card').innerHTML = templateCard;
  }
  
  displayCard();
