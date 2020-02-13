// forcast today is 293 kelvin
const kelvin = 0;

// celsius is 273 from kelvin
let celsius = kelvin - 273;

// calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//use Math library method 'floor' to round number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// converts celsius to Newton scale
let newton = Math.floor(celsius * (33/100));

console.log(`${newton}`);