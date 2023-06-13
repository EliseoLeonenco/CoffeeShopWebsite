// Get the food toggle button element
const foodToggleBtn = document.querySelector('.menu .toggle-btn#food-panel');

// Add a click event listener to the food toggle button, toggles the 'active' class of menu container
foodToggleBtn.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu .box-container#food-panel');
    menuContainer.classList.toggle('active');
});

// Get the hot drinks toggle button element
const hotDrinksToggleBtn = document.querySelector('.menu .toggle-btn#hot-drinks-panel');

// Add a click event listener to the hot drinks toggle button, toggles the 'active' class of menu container
hotDrinksToggleBtn.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu .box-container#hot-drinks-panel');
    menuContainer.classList.toggle('active');
});

// Get the specials toggle button element
const specialsToggleBtn = document.querySelector('.menu .toggle-btn#specials-panel');

// Add a click event listener to the specials toggle button, toggles the 'active' class of menu container
specialsToggleBtn.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu .box-container#specials-panel');
    menuContainer.classList.toggle('active');
});

// Get the breakfast toggle button element
const breakfastToggleBtn = document.querySelector('.menu .toggle-btn#breakfast-panel');

// Add a click event listener to the breakfast toggle button, toggles the 'active' class of menu container
breakfastToggleBtn.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu .box-container#breakfast-panel');
    menuContainer.classList.toggle('active');
});

// Get the cold drinks toggle button element
const coldDrinksToggleBtn = document.querySelector('.menu .toggle-btn#cold-drinks-panel');

// Add a click event listener to the cold drinks toggle button, toggles the 'active' class of menu container
coldDrinksToggleBtn.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu .box-container#cold-drinks-panel');
    menuContainer.classList.toggle('active');
});