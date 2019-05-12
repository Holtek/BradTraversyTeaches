// Makes A Pop Up that says hello world ;)
// alert('Hello World');
// var, let, const (don't use var)
// U can change values in let but that will not work for const
// let score;
// score=10;
// console.log(score);
// Strings, Numbers, Boolean, null, undefined, Symbol 
// // const name = 'John';
// const age = 32;
// const rating= 4.5;
// const isCool= true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name); // = string
// console.log(typeof age); // = number
// console.log(typeof isCool); // = boolean
// console.log(typeof z); // = undefined 
// Concatenation
// const name = 'John';
// const age = 32;
// console.log('My name is '+ name +' and i am ' + age ); //don't do this pls
//Template String 
// console.log(`my name is ${name} and i am ${age}` )
// const s = 'hello world'
// Gives us length of s variable ;)
// console.log(s.length);
// Makes all letters in variable s uppercase 
// console.log(s.toUpperCase());
// Makes all letters in variable s lowercase 
// console.log(s.toLowerCase());
//It just splits all letters in 's' variable
// console.log(s.split(''));
//There is much more pff :P
//Arrays - variables that hold multiple values
// const fruits = ['apples', 'oranges', 'pears'];
// number 1 acts like a choosing thingy number one in this case are oranges ;)
// now we have added one more fruit to the array with fruits[3]= 'grapes'; 
/*
console.log(fruits[1]);
fruits[3]= 'grapes';   //this could be used but there is better way
fruits.push('mangos'); //this is better way to put something into array;
fruits.unshift ('strawberries') // you still put something into array but with this item that we place is put on the beggining
fruits.pop(); // this removes last item in the array
console.log(fruits);
*/
/*
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 main st',
      city: 'Boston',
      state: 'MA'
    }
}
*/
// console.log(person.age);  
// console.log(person.hobbies[1]);
// console.log(person.address.street);
// person.email = 'john@gmail.com'; //adds new property 
/*
const todos= [
  {
    id:1,
    text: 'take out trash',
    isCompleted: true
  },
  {
    id:2,
    text: 'meeting with boss',
    isCompleted: true
  },
  {
    id:3,
    text: 'dentist appointment',
    isCompleted: true
  },
]

//console.log(todos[1].text);    how to choose something

const todoJSON = JSON.stringify(todos);  //turns this into json format
console.log(todoJSON);
*/
/*
const todos= [
  {
    id:1,
    text: 'take out trash',
    isCompleted: true
  },
  {
    id:2,
    text: 'meeting with boss',
    isCompleted: true
  },
  {
    id:3,
    text: 'dentist appointment',
    isCompleted: false
  },
]

//For Loops
/*
for (let i = 0; i<10 ; i++) {
  //console.log(i); // u can do it like this
  console.log (`For Loop Number: ${i}`); // but also like this :)
}

//While Loops

let i = 0
while(i<10) {
  console.log (`While Loop Number: ${i}`);
  i++;
}



// for(let todo of todos) {
//   console.log(todo.text);
// }


//forEach, map, filter

todos.forEach(function(todo){
  console.log(todo.text);
});

const todoText = todos.map(function(todo){
  return todo.text;
});
console.log(todoText);


// const todoCompleted = todos.filter(function(todo){
//   return todo.isCompleted === true;
// });
// console.log(todoCompleted);

const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
})
console.log(todoCompleted);

*/
/*
const x = 14;

if(x==10) {
  console.log('x is 10');
} else if(x>10) {
  console.log('x is greater than 10')
}else {
  console.log (' x is less than 10')
}


const x = 6;
const y = 11;


// || is or
// && is and
// ? is then
// : is else


if(x > 5 && y > 10) {
  console.log('x is more than 5 or y is  more than 10');
}
*/
/*
const x = 9;

const color= x > 10 ? 'red' : 'blue';
console.log(color);

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is neither')
    break;
} {
*/
/*
function addNums(num1,num2){
  console.log(num1 + num2);
}
addNums(5,4);

function addNums(num3=1 ,num4=1){
  console.log(num3 + num4);
}
addNums();

function addNums(num5 ,num6){
 return(num5 + num6);
}
console.log(addNums(4,8));

const  addNums = (num5 ,num6) => {
  return (num5 + num6);
}
 console.log(addNums(4,8));
 
 const  addNums = (num5 ,num6) => num5 + num6;

 console.log(addNums(4,8));


 //Constructor function

 function Person (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob =new Date(dob);
  
 }

 //Instantiate object

const person1 = new Person('John', 'Doe', '4-3-1987');

console.log(person1.dob);


function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    Person.prototype.getBirthYear = function(){
      return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function () {
      return `${this.firstName} ${this.lastName}`
    }
  }


const person1 = new Person('John', 'Doe', '4-3-1987');
const person2 = new Person('Jack', 'Thompson', '5-7-1997');
const person3 = new Person('Mary', 'Smith', '1-4-1967');

console.log(person3.getFullName());


//Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear () {
    return this.dob.getFullYear();
  }
  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('John', 'Doe', '4-3-1987');
const person2 = new Person('Jack', 'Thompson', '5-7-1997');
const person3 = new Person('Mary', 'Smith', '1-4-1967');
//This is all the same as the thing above

console.log(person3.getFullName());
console.log(person1);

*/


//DOM


//Single Element Selector

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

//Multiple Element Selector

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementByClassName('item') );
// console.log(document.getElementsByTagName('li'));


// const ul = document.querySelector('.items');

//  ul.remove();
//  ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1> Hello </h1>'

// const btn = document.querySelector('btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('click');
//   document.querySelector('#my-form').style.background = '#ccc';

//   document.querySelector('body').classList.add('bg-dark');

//   document.querySelector('.items').lastElementChild.innerHTML = '</h1> Hellow </h1>'
// });


const myForm = document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();
  
  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = '<h1> Please enter all fields</h1>'

    setTimeout(()=> msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    //Clear Fields

    nameInput.value = '';
    emailInput.value = '';
  }
 }