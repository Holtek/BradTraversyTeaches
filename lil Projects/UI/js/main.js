// Questions Array

const questions = [
  { question: 'Enter Your First Name' },
  { question: 'Enter Your Last Name' },
  { question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/ },
  { question: 'Create A Password', type: 'password' }
];

// transition times

const shakeTime = 100;  //Shake transition time
const switchTime= 200; // Transition between questions

// Init position at first question

let position = 0;

// init dom elements
 
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// Events

document.addEventListener('DOMContentLoaded',getQuestion);

nextBtn.addEventListener('click', validate);

inputField.addEventListener('keyup', e => {
  if(e.keyCode == 13) {
    validate();
  }
})
// Functions

function getQuestion() {
  // Get Current Question
  inputLabel.innerHTML = questions[position].question;
  // Get Current Type
  inputField.type = questions[position].type || 'text';
  // Get Current Answer
  inputField.value = questions[position].answer || '';
  // Focus On Element
  inputField.focus();

  // Set Progress Bar Width - Variable to the questions length
  progress.style.width = (position * 100) / questions.length + '%';

  // Add User Icon OR Back Arrow Depending On Question
  prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

  showQuestion();
}

// Display question to user 

function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = '';
  inputProgress.style.width = '100%';
}

// Hide the question

function hideQuestion(){
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition ='none';
  inputGroup.style.border = null;
}
// transform to create shake motion

function transform(x, y){
  formBox.style.transform = `translate(${x}px ${y}px)`

}
// Validate Field

function validate() {
  // Make Sure Pattern Matches If There Is One
  if (!inputField.value.match(questions[position].pattern || /.+/)) {
    inputFail();
  } else {
    inputPass();
  }
}


function inputFail() {
  formBox.className = 'error';
  // Repeat Shake Motion -  Set i to number of shakes
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}

function inputPass(){
  formBox.className = '';
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0 , 10);

// Store answer in the array
questions[position].answer = inputField.value;


  // Increment position
  position++;
  // If new question hide current 
  if(questions[position]){
    hideQuestion();
    getQuestion();
  }else{
    // Remove if no more questions
    hideQuestion();
    formBox.className = 'close';
    progress.style.width = '100%';

    // Form is complete
    formComlete();
  }
} 

// All fields complete

function formComlete(){
  const h1 = document.createElement('h1');
  h1.classList.add('end');
  h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer} You are registered and you will get email shortly`));
  setTimeout(() => {
    formBox.parentElement.appendChild(h1);
    setTimeout(() => (h1.style.opacity = 1), 50);
  }, 1000);
}


  