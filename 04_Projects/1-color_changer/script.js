const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(event) {  // event object
    console.log(event);
    console.log(event.target);    // gives us the details of the clicked event 
    if(event.target.id === 'grey') {
      body.style.background = event.target.id;  // or grey
    }

    if(event.target.id === 'white') {
      body.style.background = event.target.id;
    }

    if(event.target.id === 'blue') {
      body.style.background = event.target.id;
    }

    if(event.target.id === 'yellow') {
      body.style.background = event.target.id;
    }

    if(event.target.id === 'purple') {
      body.style.background = event.target.id;
    }
  })
});