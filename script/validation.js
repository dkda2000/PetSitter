document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario hasta que la validación sea exitosa
    
    let isValid = true;

    // Obtener los valores de los campos
    const name = document.getElementById('nombreCompleto').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('telefono').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar nombre (debe tener al menos 3 caracteres)
    if (name.length < 3) {
        isValid = false;
        alert('El nombre debe tener al menos 3 caracteres.');
    }

    // Validar correo electrónico (formato básico)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Por favor, ingresa un correo electrónico válido.');
    }

    // Validar número de teléfono (formato básico)
    const phonePattern = /^\d{10}$/; // Ejemplo para un número de 10 dígitos
    if (!phonePattern.test(phone)) {
        isValid = false;
        alert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
    }

    // Validar mensaje (no vacío)
    if (message === "") {
        isValid = false;
        alert('El mensaje no puede estar vacío.');
    }

    // Si el formulario es válido, envíalo
    if (isValid) {
        this.submit();
    }
});