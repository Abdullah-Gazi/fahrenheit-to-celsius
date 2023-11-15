const fahrenheitInput = document.querySelector('input[type="text"]');
const button = document.getElementById('btn-1');
const celsiusOutput = document.createElement('p');

button.addEventListener('click', () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5 / 9;
  celsiusOutput.textContent = `Celsius temperature: ${celsius.toFixed(2)}°C`;
  document.querySelector('.inner').appendChild(celsiusOutput);
});