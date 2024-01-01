const convertToCelsius = function(tempF) {
  let newTemp = ((tempF - 32)  * 5) / 9;
  return roundNumber(newTemp);
};

const convertToFahrenheit = function(tempC) {
  let newTemp = ((tempC * 9)/ 5) + 32
  return roundNumber(newTemp);
};

function roundNumber(number) {
  return Number((Math.round(number * 10) / 10).toFixed(1));
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
