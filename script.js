fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
    addEventListeners(); // Add event listeners after loading content
  });

function addEventListeners() {
  // Add click event to menu button
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  // Add click events to submenu items
  const submenus = document.querySelectorAll('.has-submenu > a');
  submenus.forEach(submenu => {
    submenu.addEventListener('click', toggleSubmenu);
  });
}

function toggleMenu() {
  const sidenav = document.querySelector('.sidenav');
  sidenav.classList.toggle('show');
}

function toggleSubmenu(event) {
  event.preventDefault();
  const submenuParent = event.target.parentElement;
  submenuParent.classList.toggle('submenu-active');
}
