fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
  });

function toggleMenu() {
    var sidenav = document.getElementById("mySidenav");
    sidenav.classList.toggle("show");
}

function toggleSubmenu(event, element) {
    event.preventDefault();
    element.classList.toggle("submenu-active");
}
