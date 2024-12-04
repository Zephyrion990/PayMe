document.getElementById("payment-method").addEventListener("change", function() {
    const cardInput = document.querySelector(".card-input");
    const userInput = document.querySelector(".user-input");
    
    if (this.value === "card") {
        cardInput.style.display = "block";
        userInput.style.display = "none";
    } else if (this.value === "user") {
        cardInput.style.display = "none";
        userInput.style.display = "block";
    }
});

document.getElementById("transfer-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // Validate amount
    const amount = document.getElementById("amount");
    if (amount.value === "" || isNaN(amount.value) || amount.value <= 0) {
        showError(amount, "Por favor, ingresa un monto válido.");
        valid = false;
    } else {
        hideError(amount);
    }

    // Validate card or email
    const paymentMethod = document.getElementById("payment-method").value;
    if (paymentMethod === "card") {
        const cardNumber = document.getElementById("card-number");
        if (!/^\d{16}$/.test(cardNumber.value)) {
            showError(cardNumber, "El número de tarjeta debe ser de 16 dígitos.");
            valid = false;
        } else {
            hideError(cardNumber);
        }
    } else if (paymentMethod === "user") {
        const email = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            showError(email, "Por favor, ingresa un correo electrónico válido.");
            valid = false;
        } else {
            hideError(email);
        }
    }

    // If valid, submit the form (here, just log the data for demonstration)
    if (valid) {
        console.log("Form submitted!");
    }
});

function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    input.style.borderColor = "#e74c3c";
}

function hideError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.style.display = "none";
    input.style.borderColor = "#ddd";
}
