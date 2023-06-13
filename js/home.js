// Get the elements
const menubar = document.querySelector('.menubar');
const searchForm = document.querySelector('.search-form');

// Toggle the 'active' class when the menu button is clicked
document.querySelector('#menu-btn').onclick = () => {
    menubar.classList.toggle('active');
    searchForm.classList.remove('active');
}

// Toggle the 'active' class when the search button is clicked
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    menubar.classList.remove('active');
}

// Remove the 'active' class from both elements when the window is scrolled
window.onscroll = () => {
    menubar.classList.remove('active');
    searchForm.classList.remove('active');
}
