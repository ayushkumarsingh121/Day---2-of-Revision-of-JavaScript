// Question: Given an array of numbers, use map() to create a new array that contains the numbers divided by 2.
// const numbers = [10, 20, 30, 40, 50];
// Expected output: [5, 10, 15, 20, 25]


const numbers = [10, 20, 30, 40, 50];

let arr = numbers.map((item)=>{
  return item / 2
})

console.log(arr)