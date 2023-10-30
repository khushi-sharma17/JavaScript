const form = document.querySelector('form');

// the height and weight values are taken inside the event because we don't want to take empty values before the submit.
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)) {         // height != NaN 
    results.innerHTML = `Please give a valid height ${height}`; 
  } 
  else if(weight === '' || weight < 0 || isNaN(weight)) {         // weight != NaN 
    results.innerHTML = `Please give a valid weight ${weight}`; 
  } 
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // showing the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});