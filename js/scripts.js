// Take in temperature in degrees Fareneheit
function toCelsius() {
  let temperatureF = parseInt(window.prompt("Enter the temperature in degrees Farenheit"));
  // Conversion equation C = 5/9(F-32)
  let temperatureC = (5 / 9) * (temperatureF - 32);
  window.alert("Equals " + temperatureC + " in degrees Celsius");
  return temperatureC;
}
  
// Output temperature in degrees Celsius

toCelsius();