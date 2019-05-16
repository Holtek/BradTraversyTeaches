//Examine the document object

// console.dir(document); 
// console.log(document.domain); shows domain
// console.log(document.title); Shows us the title\
// You can select like everyting from the document 

// document.title = 123;  changes title

//GETELEMENTBYID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
// headerTitle.textContent= 'Hellow';  It changes text within the div
// headerTitle.innerText= 'Goodbye'; With inner text u disregard style idk how to explain it ask Brad :P
// headerTitle.innerHTML= '<h3> YAHHOO </h3>'  this one like adds more html to html 
// headerTitle.style.borderBottom = '5px solid #333'; umm this one changes css 


//  GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]); // it's second  item
// items[1].textContent ='yahoo';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow'


// for(var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor= '#f4f4f4'; 
// }


//  GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]); // it's second  item
// li[1].textContent ='yahoo';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow'


// for(var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor= '#f4f4f4'; 
// }

// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hellow';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


//QUERYSELECTORALL

var titles = document.querySelectorAll('.title');

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor ='#f4f4f4';
  even[i].style.backgroundColor = 'red'

}
