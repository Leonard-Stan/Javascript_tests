// script.js

function toggleMenu() {
  /*  const menu = document.getElementById('menu');
    menu.classList.toggle('show');*/
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menu-button');
    
    menu.classList.toggle('show');
    menuButton.classList.toggle('show');
}
