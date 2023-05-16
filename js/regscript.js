// Registration form validation

const registerForm = document.getElementById("register-form");
const firstNameInput = document.querySelector("input[placeholder=' Frist Name']");
const lastNameInput = document.querySelector("input[placeholder=' Last Name']");
const usernameInput = document.querySelector("input[placeholder=' Username']");
const emailInput = document.querySelector("input[placeholder=' Your Email']");
const passwordInput = document.querySelector("input[placeholder=' Password']");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Define regular expressions for validation
  const nameRegex = /^[a-zA-Z ]+$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  // Define error messages
  const firstNameError = "Please enter a valid first name (letters and spaces only)";
  const lastNameError = "Please enter a valid last name (letters and spaces only)";
  const usernameError = "Please enter a valid username (3-16 characters, letters, numbers, underscores and hyphens only)";
  const emailError = "Please enter a valid email address";
  const passwordError = "Please enter a valid password (at least 8 characters long, contains at least one uppercase letter, one lowercase letter and one number)";

  // Validate form inputs
  if (!nameRegex.test(firstNameInput.value)) {
    alert(firstNameError);
    return false;
  }
  if (!nameRegex.test(lastNameInput.value)) {
    alert(lastNameError);
    return false;
  }
  if (!usernameRegex.test(usernameInput.value)) {
    alert(usernameError);
    return false;
  }
  if (!emailRegex.test(emailInput.value)) {
    alert(emailError);
    return false;
  }
  if (!passwordRegex.test(passwordInput.value)) {
    alert(passwordError);
    return false;
  }

  // If all inputs are valid, submit the form
  registerForm.submit();
});
