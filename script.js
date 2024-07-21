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

  const submenus = document.querySelectorAll('.has-submenu > a');
  submenus.forEach(submenu => {
    submenu.addEventListener('click', toggleSubmenu);
  });

  // Add hover events for desktop
  const submenuParents = document.querySelectorAll('.has-submenu');
  submenuParents.forEach(parent => {
    parent.addEventListener('mouseenter', showSubmenu);
    parent.addEventListener('mouseleave', hideSubmenu);
  });
}

function toggleMenu() {
  const sidenav = document.querySelector('.sidenav');
  sidenav.classList.toggle('show');
}

function toggleSubmenu(event) {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    const submenuParent = event.target.parentElement;
    submenuParent.classList.toggle('submenu-active');
  }
}

function showSubmenu(event) {
  if (window.innerWidth > 768) {
    this.querySelector('ul').style.display = 'block';
  }
}

function hideSubmenu(event) {
  if (window.innerWidth > 768) {
    this.querySelector('ul').style.display = 'none';
  }
}
