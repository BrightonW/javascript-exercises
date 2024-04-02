const convertToCelsius = function(far) {
  return Number((Math.round(((far - 32)*5/9)*10)/10).toFixed(1))
};

const convertToFahrenheit = function(cel) {
  return Number((Math.round((cel * 9/5 + 32)*10)/10).toFixed(1))

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
