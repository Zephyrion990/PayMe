// Función para validar el número de tarjeta (solo números)
document.getElementById('card-number').addEventListener('input', function (e) {

    let value = e.target.value;
    value = value.replace(/[^0-9]/g, ''); // Eliminar cualquier caracter no numérico
    e.target.value = value; // Actualizar el valor del input
});

// Función para manejar la fecha de expiración
document.getElementById('expire-date').addEventListener('focus', function () {
    this.type = 'text'; // Cambiar el tipo de campo a 'text' para el formato MM/AA
});

// Validación para la fecha de expiración
document.getElementById('expire-date').addEventListener('input', function (e) {
    let value = e.target.value;
    // Validar que la fecha sea MM/AA
    if (value.length === 2 && !value.includes('/')) {
        e.target.value = value + '/'; // Agregar el separador '/' después de los dos primeros dígitos
    }

    // Validación de formato y longitud
    if (value.length > 5) {
        e.target.value = value.slice(0, 5); // Limitar la longitud a 5 caracteres
    }
});

// Validación al enviar el formulario
document.getElementById('card-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir que el formulario se envíe automáticamente
    
    let cardNumber = document.getElementById('card-number').value;
    let expireDate = document.getElementById('expire-date').value;
    let cvv = document.getElementById('cvv').value;
    
    let errors = [];

    // Limpiar los mensajes de error previos
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = "");

    // Validación para el número de tarjeta
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        document.getElementById('card-number').nextElementSibling.textContent = "Número de tarjeta inválido. Debe ser de 16 dígitos.";
        errors.push("Número de tarjeta inválido");
    }

    // Validación para la fecha de expiración
    if (!expireDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expireDate)) {
        document.getElementById('expire-date').nextElementSibling.textContent = "Fecha de expiración inválida. Usa el formato MM/AA.";
        errors.push("Fecha de expiración inválida");
    }

    // Validación para el CVV
    if (cvv.length !== 3 || isNaN(cvv)) {
        document.getElementById('cvv').nextElementSibling.textContent = "El CVV debe ser un número de 3 dígitos.";
        errors.push("CVV inválido");
    }

    // Si hay errores, mostrar los mensajes de error
    if (errors.length > 0) {
        return; // Evitar enviar el formulario
    } else {
        alert("Formulario enviado correctamente.");
        // Aquí puedes enviar el formulario o hacer lo que necesites
    }
});

