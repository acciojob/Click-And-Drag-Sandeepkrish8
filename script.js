const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  startX = e.clientX;
  scrollLeft = slider.scrollLeft;
});

window.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

window.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const walk = (e.clientX - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
