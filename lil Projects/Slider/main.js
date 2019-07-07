const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',
  nextSlide);
prevBtn.addEventListener('click',
  prevSlide);


function nextSlide() {
  container.animate([{
    opacity: '0.1'
  }, {
    opacity: '1'
  }], {
    duration: 1000,
    fill: 'forwards'
  })

  if (counter === 4) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(img/bg-${counter}.jpg)`
}

function prevSlide() {
  container.animate([{
    opacity: '0.1'
  }, {
    opacity: '1'
  }], {
    duration: 1000,
    fill: 'forwards'
  })
  if (counter === 0) {
    counter = 5;
  }
  counter--;
  container.style.backgroundImage = `url(img/bg-${counter}.jpg)`
}