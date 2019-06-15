// Select dom elements 

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// AM PM

const showAmPm = true;

//Function to show the time 

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';


  //12 hour format
  hour = hour % 12 || 12;

  // Output the time

  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${showAmPm ? amPm : ''}`;
  setTimeout(showTime, 1000);
};

//Add zeros

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background 

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('./images/morning.jpg')"
    greeting.textContent = 'Good Morning'
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')"
    greeting.textContent = 'Good Afternoon'
  } else {
    //Evening
    document.body.style.backgroundImage = "url('./images/night.jpg')"
    greeting.textContent = 'Good Evening'
    document.body.style.color = 'white';
  }

}

// get name 

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name')
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter was pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus')
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter was pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run

showTime();
setBgGreet();
getName();
getFocus();