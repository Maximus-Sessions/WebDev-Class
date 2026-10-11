let calcBtn = document.querySelector('#calcBtn');
let guestsInput = document.querySelector('#guests');
let resultText = document.querySelector('#resultText');

calcBtn.addEventListener('click', function() {
  let guestCount = guestsInput.value;
  let totalCost = guestCount * 20;
  resultText.textContent = "Total Estimated Cost: $" + totalCost;
});