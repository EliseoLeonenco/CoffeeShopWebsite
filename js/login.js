// Get the elements
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const buttonContainer = document.getElementById("btn");

// Function to handle the register button click
function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    buttonContainer.style.left = "110px";
}

// Function to handle the login button click
function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    buttonContainer.style.left = "0px";
}

// Add event listeners to the buttons
document.querySelector(".toggle-btn:nth-of-type(1)").addEventListener("click", login);
document.querySelector(".toggle-btn:nth-of-type(2)").addEventListener("click", register);
