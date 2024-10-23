// Question: Given an array of integers, use map() to create a new array that contains the squares of all the numbers.
// const numbers = [1, 2, 3, 4, 5];
// Expected output: [1, 4, 9, 16, 25]


const numbers = [1, 2, 3, 4, 5];

let arr = numbers.map((item)=>{
  return item * item
})
console.log(arr)