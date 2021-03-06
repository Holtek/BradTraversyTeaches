let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')
// form submit event
form.addEventListener('submit', addItem);
// delete event 
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems)

function addItem(e) {
  e.preventDefault();

  // Get input value

  let newItem = document.getElementById('item').value;

  // Create new li element 
  let li = document.createElement('li');
  // add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create the delete button element
  let deleteBtn = document.createElement('button')
  // add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // append button to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li)
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // Convert to lowercase
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');

  // convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none'
    }
  })
}