const chat = document.getElementById('chat');
const messages = document.getElementById('messages');
const message = document.getElementById('message');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    const newMessage = document.createElement('div');
    newMessage.innerText = message.value;
    messages.appendChild(newMessage);
    message.value = '';
});