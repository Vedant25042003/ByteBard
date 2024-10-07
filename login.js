// login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember-me');

    // Load saved email and remember me status
    const savedEmail = localStorage.getItem('savedEmail');
    const isRemembered = localStorage.getItem('isRemembered');

    if (savedEmail && isRemembered === 'true') {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Store email and remember me status
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
            localStorage.setItem('isRemembered', 'true');
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('isRemembered');
        }

        // Handle the login logic here (you can send a request to a server for authentication)
        // For demonstration purposes, we'll simply show an alert message.
        alert('Logged in with email: ' + emailInput.value);
        // Add redirection logic to the home page
        window.location.href = 'index.html';
    });
});
