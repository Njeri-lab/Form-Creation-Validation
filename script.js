form.addEventListener(DOMContentLoaded, function() {
    const form = document.getElementById("registration-form");
    
    const feedbackDiv = document.getElementById('form-feedback');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('For has been submitted successfully');
    });
        
    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    const isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be greater than 3 characters!');
    } else {
        messages.push('');
    }

    if (email.includes("@") && email.includes(".")) {
        isValid= false;
        messages.push("Email must include '@' and '.'");
    } else {
        messages.push('');
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must contain 8 characters or more");
    } else {
        messages.push('');
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent = 'Registration Successful';
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color= "#dc3545";
    }


    








});
