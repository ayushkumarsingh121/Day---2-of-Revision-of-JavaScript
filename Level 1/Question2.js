// Question: You have an array of strings representing different cities. Use map() to create a new array where each city name is converted to uppercase.
// const cities = ['New York', 'Paris', 'London'];
// Expected output: ['NEW YORK', 'PARIS', 'LONDON']


const cities = ['New York', 'Paris', 'London'];

let arr = cities.map((item)=>{
  return item.toUpperCase()
})
console.log(arr)