const randomColor = function() {      // generate a random colour 
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0 ; i<6 ; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
  
let intervalId;
let startChangingColor = function() {

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }

  if(!intervalId) {       // if intervalId is not present 
    intervalId = setInterval(changeBgColor, "1000");
  }
}

let stopChangingColor = function() {
  clearInterval(intervalId); 
  intervalId = null;    // to flush out the interval id 
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
