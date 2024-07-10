let estoyLogueado = sesionEstaVigente();
 if (!estoyLogueado){
    location.href = "login.html"
    
    
 }

function sesionEstaVigente() {
    let token = localStorage.getItem('authToken');

    try {
        // Decodifica el token usando jwt-decode
        let decodedToken = jwt_decode(token);
        
        // Obtiene la fecha de expiración del token
        let exp = decodedToken.exp;
        if (!exp) {
            return false;
        }

        // Convierte la fecha de expiración a un objeto Date
        let expDate = new Date(exp * 1000);
        let now = new Date();

        // Compara la fecha actual con la fecha de expiración
        if (expDate > now) {
            console.log("La sesión está vigente.");
            return true;
        } else {
            console.log("La sesión ha expirado.");
            return false;
        }
    } catch (error) {
        console.error('Error al decodificar el token:', error);
        return false;
    }

}