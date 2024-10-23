// Converting Temperatures:
// You have an array of temperature readings in Celsius. Convert each temperature to Fahrenheit and return a new array.

// let temperaturesC = [0, 20, 37, 100];

// let temperaturesF = temperaturesC.map((temp) => {
//   // Answer: 32, 68, 98.6, 212
// });


let temperaturesC = [0, 20, 37, 100];

let temperaturesF = temperaturesC.map((temp) => {
  let Fahrenheit = (temp * 1.8) + 32
  return Fahrenheit
});

console.log(temperaturesF)
