function scrollLeft() {
  const container = document.querySelector('.scroll-container');
  container.scrollLeft -= 100;
}

function scrollRight() {
  const container = document.querySelector('.scroll-container');
  container.scrollLeft += 100;
}