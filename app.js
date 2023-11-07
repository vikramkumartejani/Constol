function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// top navbar
function toggleHeader() {
  var headerTop = document.getElementById('headerTop');
  if (headerTop.style.display === 'none') {
      headerTop.style.display = 'block'; // If hidden, show the header
  } else {
      headerTop.style.display = 'none'; // If visible, hide the header
  }
}
