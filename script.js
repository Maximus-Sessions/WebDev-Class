let calcBtnFullDay = document.querySelector('#calcBtnFullDay');
let calcBtnHalfDay = document.querySelector('#calcBtnHalfDay');
let guestsInputFullDay = document.querySelector('#guestsFullDay');
let guestsInputHalfDay = document.querySelector('#guestsHalfDay');
let resultTextFullDay = document.querySelector('#resultTextFullDay');
let resultTextHalfDay = document.querySelector('#resultTextHalfDay');

calcBtnFullDay.addEventListener('click', function() {
  let guestCount = guestsInputFullDay.value;
  let totalCost = guestCount * 10;
  resultTextFullDay.textContent = "Total Estimated Cost For Package A: $" + totalCost;
});

calcBtnHalfDay.addEventListener('click', function() {
  let guestCount = guestsInputHalfDay.value;
  let totalCost = guestCount * 5;
  resultTextHalfDay.textContent = "Total Estimated Cost For Package B: $" + totalCost;
});