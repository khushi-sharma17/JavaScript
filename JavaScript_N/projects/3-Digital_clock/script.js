const clock = document.getElementById('clock');
// const clock = document.querySelector(#clock);

setInterval(function (){
  let date = new Date()
  // console.log(date.toLocaleTimeString());    // time will be printed in the console at every second 
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)      // milliseconds