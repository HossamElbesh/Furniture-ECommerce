// Select the login form and input fields
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#login-form input[type="text"]');
const passwordInput = document.querySelector('#login-form input[type="password"]');

// Add event listener to the login form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // Check if the input fields are empty
  if (usernameInput.value.trim() === '') {
    alert('Please enter your username or email');
    return;
  }

  if (passwordInput.value.trim() === '') {
    alert('Please enter your password');
    return;
  }

  // If everything is filled in, submit the form
  alert('Login successful!');
  loginForm.submit();
});