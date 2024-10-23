// Question: Use map() to create a new array where each number in an array of integers is incremented by its index value.
// const numbers = [10, 20, 30, 40, 50];
// Expected output: [10, 21, 32, 43, 54]

const numbers = [10, 20, 30, 40, 50];

let arr = numbers.map((item, indexNo)=>{
  return item + indexNo
})
console.log(arr)