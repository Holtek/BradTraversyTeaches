const colorBtn = document.querySelector('.color-btn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', 'blue', '#5646b4'];

colorBtn.addEventListener('click', () => {
  // bodyBcg.style.backgroundColor = 'red';
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
});

// function changeColor() {
//   bodyBcg.style.backgroundColor = 'blue';
// }