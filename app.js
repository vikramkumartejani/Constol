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

 // JavaScript function to hide the header-top on scroll down
 // JavaScript function to hide the header-top after scrolling 10 pixels down
 window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("headerTop").style.display = "none";
  } else {
      document.getElementById("headerTop").style.display = "block";
  }
};
