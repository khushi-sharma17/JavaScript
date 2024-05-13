const form = document.querySelector('form');
// whenever form is submitted through post and get , the value are sent to the server or the URL, so we need to stop the default behaviour of the form

// the height and weight values are taken inside the event because we don't want to take empty values before the submit.
// this above use case will give you empty values.

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);     // the value is coming in the form of string 
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)) {         // height != NaN 
    results.innerHTML = `Please give a valid height, this ${height} is not acceptable.`; 
  } 
  else if(weight === '' || weight < 0 || isNaN(weight)) {         // weight != NaN 
    results.innerHTML = `Please give a valid weight, this ${weight} is not acceptable`; 
  } 
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // showing the results
    

    if(bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span>, the person is overweight`; 
    } else if(bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span>, the person is underweight`;
    } else {
      results.innerHTML = `<span>${bmi}</span>, the person's weight is in the normal range`;
    }
  }
});