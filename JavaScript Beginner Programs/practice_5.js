/* Temperature Converter
Create a program that converts temperatures from Fahrenheit to Celsius. */

//Formula: c = (f-32) * 5/9

tempConverter = (fahrenheit) => {
  let convertedCelsius = ((fahrenheit - 32) * 5) / 9;
  return convertedCelsius;
};

let currentTemp = tempConverter(45);
console.log(currentTemp);
