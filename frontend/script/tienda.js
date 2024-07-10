     
var EVENTS_API = "/api/productos";

async function getProductos() {

    const response = await fetch(`${EVENTS_API}`);
    
    const json = await response.json();


    return json
  }
  
  async function displayCard() {
    let productos = await getProductos();
    console.log(productos);

    productos = productos.slice(0, 12);
    var templateCard = "";

    productos.forEach(Item => {
        
        let foto = "./img/patafelizejemplo.png";
        
        if (Item.nombre_img != null) {
            foto = "https://i48pjyg3ch4gheoj.public.blob.vercel-storage.com/img_storage/"+Item.nombre_img
        }
        
        
        let limiteCaracteres = 45

        templateCard += `<div class="col-md-3 col-sm-12 mb-3">
        <div class="card" style ="width: 250px; height: 410px">
            <img src="${foto}" class="card-img-top" alt="purinagatoejemplo">
            <div class="card-body">
                <h5 class="card-title">${Item.nombre}</h5>
                <p class="card-title">${Item.descripcion.substring(0,limiteCaracteres)+"..."}</p>
                <div class="row" style="margin-top:20px">
                    <div class="col-6" style="margin-top:5px">
                        <h5>${"$"+Item.precio}</h5>
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
