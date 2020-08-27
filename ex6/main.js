const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const targetImg = document.querySelector('.target');
const coordsBox = document.querySelector('.coords');
const targetRect = targetImg.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', event => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.transform = `translateX(${x}px)`;
  console.log(vertical.style)
  horizontal.style.transform = `translateY(${y}px)`;
  console.log(horizontal.style)
  targetImg.style.transform = `translate(${x - targetHalfWidth}px, 
    ${y - targetHalfHeight}px)`;
  coordsBox.style.transform = `translate(${x}px, ${y}px)`;
  coordsBox.innerHTML = `${x}px, ${y}px`
})