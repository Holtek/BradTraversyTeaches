// TRAVERSING THE DOM //

  var itemList = document.querySelector('#items');
  // parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'white';
// console.log(itemList.parentNode.parentNode);

// Parent Element                           THESE 2 ARE THE SAME :P

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'black';
// console.log(itemList.parentElement.parentElement);


// Child Nodes

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

// First Child 

// console.log(itemList.firstChild);

// firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hellow';


// Last Child 

//  console.log(itemList.lastChild);

// lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hellow';


// nextSibling

// console.log(itemList.nextSibling);

// Next Element Sibling

// console.log(itemList.nextElementSibling);

// Previous Sibling

// console.log(itemList.previousSibling);

// previous element sibling
// console.log(itemList.previousElementSibling);

// CREATE ELEMENT //


//Create div

var newDiv = document.createElement('div');
// add class
newDiv.className ='hello';
// add ID
newDiv.id = 'hello 1';
//Add atribute
newDiv.setAttribute('title', 'Hello Div');
// Create Text Node

var newDivText = document.createTextNode('Hello World');

// Add Text To Div

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


newDiv.style.fontSize = '30px'
console.log(newDiv);