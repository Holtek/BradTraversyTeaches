// Event Listeners 

// let button = document.getElementById('button').addEventListener('click', () => {
//   document.getElementById('header-title').textContent = 'changed'
//   document.querySelector('#main').style.background = 'red';
//   console.log('123');
// })


// 

// function buttonClick(e) {
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);

// console.log(e.type);


// console.log(e.clientX);
// console.log(e.clientY);


//   console.log(e.offsetX);
//   console.log(e.offsetY);


// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }
let button = document.getElementById('button')
let box = document.getElementById('box')

// button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)



// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)


// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form')

// itemInput.addEventListener('keydown', runEvent);





function runEvent(e) {
  console.log('Event Type:' + e.type);
  // console.log(e.target.value);
  // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40) "
  // document.getElementById('.output').innerHTML = '<h3>' + e.target.value + '</h3>'
}