document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('login-form'); // Corrected form ID
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Handle signup logic here (you can send a request to a server for user registration)
        // For demonstration purposes, we'll simply show an alert message.
        alert('Successfully Sign up!');
        // Add redirection logic to the home page
        window.location.href = 'index.html';
    });
});
