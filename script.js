// script.js

// JavaScript for the Login page
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
});

// JavaScript for the Sign Up page
const signUpForm = document.querySelector('form');
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email_signup').value;
    const password = document.getElementById('password_signup').value;
    const confirmPassword = document.getElementById('confirm_password').value;
});
