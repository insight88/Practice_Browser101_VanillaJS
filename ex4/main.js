const garo = document.querySelector('.horizontal');
const sero = document.querySelector('.vertical');
const targetImg = document.querySelector('.target');
const coordsBox = document.querySelector('.coords');

function moveTarget(event) {
  const coordsX = event.clientX;
  const coordsY = event.clientY;
  targetImg.style.left = coordsX + 'px';
  targetImg.style.top = coordsY + 'px';
}

function moveGaro(event) {
  const coordsX = event.clientX;
  garo.style.left = coordsX + 'px';
}

function moveSero(event) {
  const coordsY = event.clientY;
  sero.style.top = coordsY + 'px';
}

function moveCoords(event) {
  const coordsX = event.clientX;
  const coordsY = event.clientY;
  coordsBox.style.left = coordsX + 'px';
  coordsBox.style.top = coordsY + 'px';
  coordsBox.innerText = `${coordsX}px, ${coordsY}px`;
}

function init() {
  document.addEventListener('mousemove', moveTarget);
  document.addEventListener('mousemove', moveGaro);
  document.addEventListener('mousemove', moveSero);
  document.addEventListener('mousemove', moveCoords);
}

init();
