// Toggle background color on button click

// const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'salmon';
});

// Adapt basic example
// ● On button click, automatically toggle background 
// ● Have a button to cancel automatic toggle 

const btn = document.getElementById('btn');
const cancelBtn = document.getElementById('cancelBtn');

let intervalId = null;

btn.addEventListener('click', function onClick(event) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = 'salmon';
  }, 1000);
});         

cancelBtn.addEventListener('click', function onClick(event) {
    clearInterval(intervalId);
    document.body.style.backgroundColor = 'turquoise';
    }
);















