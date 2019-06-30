const sendBtn = document.querySelector('#send-btn');
const messageIn = document.querySelector('#message-in');
const messageOut = document.querySelector('#message-out');


sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  let content = messageIn.value;
  // console.log(content);
  if (content === '') {
    alert('Please enter valid value')
  } else {
    messageOut.innerHTML = content;
    messageIn.value = '';
  }

}