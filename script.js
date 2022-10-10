const summaryEl = document.getElementById('summary');
summaryEl.style.display = 'none';

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function() {
  const weightString = document.getElementById('weight').value;
  const heightString = document.getElementById('height').value;

  const weight = Number(weightString);
  const height = Number(heightString);

  const hasil = (weight / height * 10 * 6);

  const calculatedBMIEl = document.getElementById('calculatedBMI');
  const indicatorResult = document.getElementById('indicatorResult');

  summaryEl.style.display = 'block';
  calculatedBMIEl.innerText = hasil;

  if (hasil < 18.5 ) {
    indicatorResult.innerText = 'Underweight';
  } else if (hasil >= 18.5 && hasil < 24.9){
    indicatorResult.innerText = 'Normal weight';
  } else if (hasil >= 25 && hasil < 29.9){
    indicatorResult.innerText = 'Overweight';
  } else if (hasil > 30){
    indicatorResult.innerText = 'Obesity';
  }
});