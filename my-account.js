// Get the form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the username and password values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username and password are correct
    if (username === 'admin' && password === 'password') {
        // If the username and password are correct, redirect to the home page
        window.location.href = 'home.html';
    } else {
        // If the username and password are incorrect, show an error message
        alert('Incorrect username or password');
    }
});